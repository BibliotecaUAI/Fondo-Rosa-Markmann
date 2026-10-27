// Luna: cambia entre la paleta dorada (1) y la plata (4) y recuerda la elección entre páginas.
(() => {
const raiz = document.documentElement, CLAVE = 'rm-paleta';
const guardar = p => { try { localStorage.setItem(CLAVE, p); } catch (e) {} };
const ICONO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 14.6A8.3 8.3 0 0 1 9.4 3.8a8.3 8.3 0 1 0 10.8 10.8Z"/></svg>';

const css = document.createElement('style');
css.textContent = `
.luna{width:40px;height:40px;flex-shrink:0;border-radius:50%;display:grid;place-items:center;cursor:pointer;padding:0;
  border:1px solid rgba(201,162,39,.38);background:rgba(10,10,11,.55);color:#e6c866;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);
  transition:border-color .25s ease,background .25s ease,color .25s ease,transform .25s ease}
.luna svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linejoin:round;transition:fill .3s ease,transform .5s cubic-bezier(.2,.8,.2,1)}
.luna:hover{border-color:#e6c866;transform:translateY(-1px)}
.luna:focus-visible{outline:1px solid #e6c866;outline-offset:3px}
html[data-p="4"] .luna{border-color:rgba(195,200,207,.4);color:#eceef1}
html[data-p="4"] .luna:hover{border-color:#eceef1}
html[data-p="4"] .luna:focus-visible{outline-color:#eceef1}
html[data-p="4"] .luna svg{fill:currentColor;transform:rotate(-20deg)}
.luna.flota{position:fixed;z-index:60;top:max(16px,env(safe-area-inset-top,0px));right:max(16px,env(safe-area-inset-right,0px))}
.nav .links{margin-left:auto}
@media (max-width:900px){.nav .luna{margin-left:auto}}`;
document.head.appendChild(css);

function pintar(){
  const plata = raiz.dataset.p === '4';
  document.querySelectorAll('.luna').forEach(b => {
    b.setAttribute('aria-pressed', plata);
    b.title = plata ? 'Volver al modo dorado' : 'Modo oscuro (plata)';
    b.setAttribute('aria-label', b.title);
  });
}
function cambiar(){
  raiz.dataset.p = raiz.dataset.p === '4' ? '1' : '4';
  guardar(raiz.dataset.p); pintar();
}
function boton(clase){
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'luna' + (clase ? ' ' + clase : ''); b.innerHTML = ICONO;
  b.onclick = cambiar;
  return b;
}

// En el recorrido va dentro del menú; en el archivo, fija arriba a la derecha.
const nav = document.querySelector('.nav');
if (nav) nav.insertBefore(boton(), nav.querySelector('.menu-btn'));
else document.body.appendChild(boton('flota'));
window.rmLuna = { boton, pintar };
pintar();
})();
