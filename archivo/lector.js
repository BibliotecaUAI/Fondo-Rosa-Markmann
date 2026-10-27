// Lector de cartas: el sobre se abre, la carta queda siempre a la vista y la transcripción se escribe sola.
(() => {
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MES = { enero:'ene', febrero:'feb', marzo:'mar', abril:'abr', mayo:'may', junio:'jun', julio:'jul', agosto:'ago', septiembre:'sep', octubre:'oct', noviembre:'nov', diciembre:'dic' };
const ICO = {
  cerrar: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
  enlace: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6.5 9.5l3-3M5 8 3.5 9.5a2.1 2.1 0 0 0 3 3L8 11M11 8l1.5-1.5a2.1 2.1 0 0 0-3-3L8 5"/></svg>',
  ampliar: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14M7 5v4M5 7h4"/></svg>',
  play: '<svg viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>',
  stop: '<svg viewBox="0 0 14 14"><rect x="3" y="3" width="8" height="8" fill="currentColor"/></svg>'
};
const esc = s => String(s ?? '').replace(/[&<>"]/g, m => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' })[m]);
const region = c => (typeof R !== 'undefined' && R[c.regionCode]) ? R[c.regionCode].nombre : 'Región ' + c.regionCode;

const el = document.createElement('div');
el.className = 'lector';
el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', 'Carta del fondo');
el.innerHTML = `<div class="velo"></div>
  <div class="sobre-esc"><div class="sobre"><i class="fondo"></i><i class="hoja"></i><i class="frente"></i><i class="solapa"></i>
    <span class="mata"></span><span class="dest"></span><span class="sello">RM</span></div>
    <button class="saltar">Tocar para abrir</button></div>
  <div class="lec">
    <div class="barra"><div class="miga"></div><div class="acc">
      <button class="ic" data-a="enlace" title="Copiar enlace a esta carta" aria-label="Copiar enlace a esta carta">${ICO.enlace}</button>
      <button class="ic" data-a="cerrar" title="Volver al mapa" aria-label="Volver al mapa">${ICO.cerrar}</button></div></div>
    <div class="cuerpo">
      <div class="facs"><div class="vitrina" title="Ampliar página"><img alt=""><button class="pg ant" aria-label="Página anterior">‹</button><button class="pg sig" aria-label="Página siguiente">›</button></div>
        <div class="info"><span class="etq"></span><div class="minis"></div></div></div>
      <div class="texto"></div>
    </div>
    <div class="pie-lec"><button data-a="ant"></button><div class="puntos" aria-hidden="true"></div><button data-a="sig"></button></div>
  </div>
  <div class="ampli"><img alt=""><button class="ic" aria-label="Cerrar ampliación">${ICO.cerrar}</button></div>`;
document.body.appendChild(el);
const $ = s => el.querySelector(s), lec = $('.lec'), texto = $('.texto'), vitImg = $('.vitrina img');

let c = null, pag = 0, lang = 'es', origen = null, tiempos = [], escritura = null, voz = null, sigue = true;

/* ---------- facsímil ---------- */
function pagina(i){
  const ps = c.pages; pag = (i + ps.length) % ps.length;
  vitImg.style.opacity = .25;
  const im = new Image(); im.onload = im.onerror = () => { vitImg.src = ps[pag].src; vitImg.style.opacity = ''; }; im.src = ps[pag].src;
  vitImg.alt = `${c.title}, ${ps[pag].label}`;
  $('.etq').textContent = ps.length > 1 ? `Página ${pag + 1} de ${ps.length} · ${ps[pag].label.replace(/^Página \d+\s*—\s*/, '')}` : ps[pag].label.replace(/^Página \d+\s*—\s*/, '');
  el.querySelectorAll('.minis button').forEach((b, k) => b.classList.toggle('on', k === pag));
  $('.ampli img').src = ps[pag].src;
}

/* ---------- transcripción que se escribe sola ---------- */
function escribir(t){
  if (escritura) cancelAnimationFrame(escritura.raf);
  const p = texto.querySelector('.transc'); p.classList.remove('listo'); p.innerHTML = '';
  const cap = document.createElement('span'), ya = document.createTextNode(''), cur = document.createElement('span'), falta = document.createElement('span');
  cap.className = 'capital'; cap.textContent = t[0]; cur.className = 'cursor'; falta.className = 'falta';
  const resto = t.slice(1); falta.textContent = resto;
  p.append(cap, ya, cur, falta);
  let n = 0, espera = 0, ult = performance.now();
  sigue = true;
  const fin = () => { cancelAnimationFrame(escritura.raf); n = resto.length; ya.data = resto; falta.textContent = ''; p.classList.add('listo'); };
  const paso = ahora => {
    if (!escritura.pausa){
      espera -= ahora - ult;
      while (espera <= 0 && n < resto.length){ const ch = resto[n++]; espera += /[.!?]/.test(ch) ? 300 : /[,;:]/.test(ch) ? 150 : 24; }
      ya.data = resto.slice(0, n); falta.textContent = resto.slice(n);
      if (sigue){ const a = cur.getBoundingClientRect().bottom, b = texto.getBoundingClientRect().bottom - 48; if (a > b) texto.scrollTop += a - b; }
    }
    ult = ahora;
    if (n < resto.length) escritura.raf = requestAnimationFrame(paso); else fin();
  };
  escritura = { raf: 0, pausa: false, fin };
  const pb = texto.querySelector('[data-a="pausa"]'); if (pb) pb.textContent = 'Pausar';
  if (quieto) fin(); else escritura.raf = requestAnimationFrame(paso);
}
['wheel', 'touchstart'].forEach(ev => texto.addEventListener(ev, () => { sigue = false; }, { passive: true }));

/* ---------- audio ---------- */
function callar(){
  if (voz?.a) voz.a.pause();
  if (voz?.u && 'speechSynthesis' in window) speechSynthesis.cancel();
  voz = null;
  const b = texto.querySelector('[data-a="oir"]'); if (!b) return;
  b.classList.remove('suena'); b.querySelector('.ico').innerHTML = ICO.play; b.querySelector('.lbl').textContent = 'Escuchar'; b.querySelector('.prog i').style.width = 0;
}
function escuchar(){
  if (voz){ callar(); return; }
  const t = lang === 'en' ? c.textEn : c.text, f = lang === 'en' ? c.audioEn : c.audioEs;
  const b = texto.querySelector('[data-a="oir"]'), bar = b.querySelector('.prog i');
  if (f){
    const a = new Audio(f); voz = { a };
    a.ontimeupdate = () => { if (a.duration) bar.style.width = (100 * a.currentTime / a.duration) + '%'; };
    a.onended = callar; a.play().catch(callar);
  } else if ('speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(t); u.lang = lang === 'en' ? 'en-US' : 'es-CL'; u.rate = .95;
    u.onboundary = e => { bar.style.width = (100 * e.charIndex / t.length) + '%'; };
    u.onend = () => { if (voz?.u === u) callar(); };
    speechSynthesis.cancel(); speechSynthesis.speak(u); voz = { u };
  } else return;
  b.classList.add('suena'); b.querySelector('.ico').innerHTML = ICO.stop; b.querySelector('.lbl').textContent = 'Detener';
}

/* ---------- contenido de la carta ---------- */
function pintar(){
  const i = CARTAS.indexOf(c), ant = CARTAS[i - 1], sig = CARTAS[i + 1], ps = c.pages;
  $('.miga').innerHTML = `Archivo · ${esc(region(c))} · <b>Carta ${i + 1} de ${CARTAS.length}</b>`;
  $('.vitrina').classList.toggle('una', ps.length < 2);
  el.querySelectorAll('.pg').forEach(b => { b.hidden = ps.length < 2; });
  $('.minis').innerHTML = ps.length > 1 ? ps.map((p, k) => `<button style="background-image:url('${p.src}')" aria-label="Ver ${esc(p.label)}"></button>`).join('') : '';
  $('.minis').querySelectorAll('button').forEach((b, k) => b.onclick = () => pagina(k));
  pagina(0);
  const fila = (k, v) => v ? `<dt>${k}</dt><dd>${esc(v)}</dd>` : '';
  texto.innerHTML = `<div><div class="eb">Carta Nº ${c.id} · Fondo Rosa Markmann</div><h2>${esc(c.title)}</h2></div>
    <p class="quien">De <i>${esc(c.from)}</i> a ${esc(c.to)} · ${esc(c.city)}, ${esc(c.date)}</p>
    <div class="regla"></div>
    <div class="ctrl"><div class="seg" role="group" aria-label="Idioma de la transcripción"><button data-l="es" aria-pressed="${lang === 'es'}">Español</button><button data-l="en" aria-pressed="${lang === 'en'}">English</button></div>
      <button class="chip oro" data-a="oir"><span class="ico">${ICO.play}</span><span class="lbl">Escuchar</span><span class="prog"><i></i></span></button>
      <button class="chip" data-a="ampliar">${ICO.ampliar} Ampliar página</button></div>
    <p class="transc" lang="${lang}"></p>
    <div class="escribe"><button data-a="pausa">Pausar</button><button data-a="todo">Mostrar completa</button></div>
    <details class="ficha"><summary>Ficha catalográfica</summary><dl>
      ${fila('Remitente', c.from)}${fila('Destinataria', c.to)}${fila('Lugar', `${c.city}, ${region(c)}`)}${fila('Fecha', c.date)}${fila('Procedencia', c.origin)}
      ${fila('Soporte', `${ps.length} ${ps.length === 1 ? 'página' : 'páginas'} digitalizadas`)}
      ${(c.annotations || []).map(a => fila(a.label, a.value)).join('')}${fila('Temas', (c.tags || []).join(' · '))}</dl></details>`;
  texto.querySelector('[data-a="oir"]').title = (lang === 'en' ? c.audioEn : c.audioEs) ? 'Grabación original' : 'Voz sintética';
  texto.scrollTop = 0;
  const pie = (b, x, txt) => { b.disabled = !x; b.innerHTML = x ? (txt === 'ant' ? `‹ <span class="lbl">Anterior:</span> <b>${esc(x.title)}</b>` : `<span class="lbl">Siguiente:</span> <b>${esc(x.title)}</b> ›`) : ''; };
  pie($('[data-a="ant"]'), ant, 'ant'); pie($('[data-a="sig"]'), sig, 'sig');
  $('.puntos').innerHTML = CARTAS.map(x => `<i class="${x === c ? 'on' : ''}"></i>`).join('');
}
function idioma(l){
  if (l === lang) return;
  callar(); lang = l;
  texto.querySelectorAll('.seg button').forEach(b => b.setAttribute('aria-pressed', b.dataset.l === l));
  texto.querySelector('[data-a="oir"]').title = (l === 'en' ? c.audioEn : c.audioEs) ? 'Grabación original' : 'Voz sintética';
  const p = texto.querySelector('.transc'); p.lang = l;
  escribir(l === 'en' ? c.textEn : c.text);
}

/* ---------- abrir, cambiar y cerrar ---------- */
function sobre(){
  $('.hoja').style.backgroundImage = `url('${c.pages[0].src}')`;
  $('.dest').innerHTML = `<b>Sra. ${esc(c.to)}</b>Palacio de La Moneda · Santiago`;
  const m = /(\d+)\s+de\s+(\w+)\s+de\s+(\d{4})/i.exec(c.date || '');
  $('.mata').innerHTML = `${esc(c.city.split(',')[0])}<br>${m ? `${m[1]} ${MES[m[2].toLowerCase()] || ''}<br>${m[3]}` : '1952'}`;
}
function mostrar(){
  tiempos.forEach(clearTimeout); tiempos = [];
  if (el.classList.contains('s4')) return;
  el.classList.add('s1', 's2', 's3', 's4');
  escribir(lang === 'en' ? c.textEn : c.text);
  setTimeout(() => $('[data-a="cerrar"]').focus({ preventScroll: true }), 400);
}
function abrir(id, conSobre = true){
  const x = CARTAS.find(k => k.id == id); if (!x) return;
  c = x; lang = 'es'; callar();
  if (!el.classList.contains('on')) origen = document.activeElement;
  sobre(); pintar();
  el.className = 'lector on'; document.documentElement.classList.add('leyendo');
  if (history.state?.carta) history.replaceState({ carta: c.id }, '', '?carta=' + c.id);
  else history.pushState({ carta: c.id }, '', '?carta=' + c.id);
  if (quieto || !conSobre){ mostrar(); return; }
  const t = (ms, f) => tiempos.push(setTimeout(f, ms));
  t(60, () => el.classList.add('s1')); t(800, () => el.classList.add('s2')); t(1700, () => el.classList.add('s3')); t(2650, mostrar);
}
function cambiar(x){
  if (!x) return;
  callar(); if (escritura) cancelAnimationFrame(escritura.raf);
  lec.classList.add('cambia');
  setTimeout(() => {
    c = x; sobre(); pintar(); lec.classList.remove('cambia');
    history.replaceState({ carta: c.id }, '', '?carta=' + c.id);
    escribir(lang === 'en' ? c.textEn : c.text);
  }, 320);
}
function cerrar(desdeHistoria){
  if (!el.classList.contains('on')) return;
  tiempos.forEach(clearTimeout); tiempos = []; callar();
  if (escritura) cancelAnimationFrame(escritura.raf);
  $('.ampli').classList.remove('on');
  el.className = 'lector'; document.documentElement.classList.remove('leyendo');
  if (!desdeHistoria){ if (history.state?.carta) history.back(); else history.replaceState(null, '', location.pathname); }
  if (origen && document.contains(origen)) origen.focus({ preventScroll: true });
}

/* ---------- eventos ---------- */
$('.sobre-esc').onclick = mostrar;
vitImg.parentElement.onclick = e => { if (e.target.closest('.pg')) return; $('.ampli').classList.add('on'); };
$('.pg.ant').onclick = () => pagina(pag - 1);
$('.pg.sig').onclick = () => pagina(pag + 1);
$('.ampli').onclick = () => $('.ampli').classList.remove('on');
el.addEventListener('click', e => {
  const b = e.target.closest('[data-a],[data-l]'); if (!b) return;
  if (b.dataset.l) return idioma(b.dataset.l);
  const i = CARTAS.indexOf(c);
  ({
    cerrar: () => cerrar(),
    ant: () => cambiar(CARTAS[i - 1]),
    sig: () => cambiar(CARTAS[i + 1]),
    oir: escuchar,
    ampliar: () => $('.ampli').classList.add('on'),
    pausa: () => { escritura.pausa = !escritura.pausa; b.textContent = escritura.pausa ? 'Seguir' : 'Pausar'; },
    todo: () => escritura.fin(),
    enlace: () => {
      const url = location.href, ok = () => { b.title = 'Enlace copiado'; b.style.borderColor = 'var(--acc2)'; setTimeout(() => { b.title = 'Copiar enlace a esta carta'; b.style.borderColor = ''; }, 1600); };
      (navigator.clipboard?.writeText(url) || Promise.reject()).then(ok, () => prompt('Copia el enlace:', url));
    }
  })[b.dataset.a]?.();
});
addEventListener('keydown', e => {
  if (!el.classList.contains('on')) return;
  if (!el.classList.contains('s4')){ e.preventDefault(); mostrar(); return; }
  if (e.key === 'Escape'){ if ($('.ampli').classList.contains('on')) $('.ampli').classList.remove('on'); else cerrar(); }
  else if (e.key === 'ArrowRight' && !e.target.closest('input,textarea')) pagina(pag + 1);
  else if (e.key === 'ArrowLeft' && !e.target.closest('input,textarea')) pagina(pag - 1);
});
addEventListener('popstate', e => {
  if (e.state?.carta){ abrir(e.state.carta, false); }
  else cerrar(true);
});

window.abrirCarta = id => abrir(id);
// Enlace directo: /archivo/?carta=N entra en la región de la carta y la abre.
const directa = new URLSearchParams(location.search).get('carta');
if (directa){
  const x = CARTAS.find(k => k.id == directa);
  if (x){
    if (typeof ver === 'function') ver(x.regionCode);
    history.replaceState(null, '', location.pathname);
    abrir(x.id);
  }
}
})();
