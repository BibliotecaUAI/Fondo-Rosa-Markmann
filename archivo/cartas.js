// Cartas del fondo: textos, ficha y páginas escaneadas. Las usa el lector de /archivo/.
// Rutas relativas a /archivo/.
// Documento real del fondo, digitalizado a partir del original manuscrito.
const realLetter = {
  id: 1,
  regionCode: "V",
  lat: -33.5967, lng: -71.6178, // Llo-Lleo, San Antonio, Región de Valparaíso (lugar donde se escribió la carta)
  place: "Escrita en Llo-Lleo, San Antonio",
  city: "Llo-Lleo, San Antonio", // nombre de ciudad usado en el pin del mapa (Ciudad — N° de cartas)
  title: "Solicitud de pensión de gracia",
  from: "Ed. Amengual S.",
  to: "Rosa Markmann de González Videla",
  date: "23 de agosto de 1952",
  origin: "Dirigida a Palacio de La Moneda, Santiago",
  text: "Con fecha 24 de Octubre de 1951, me permití enviar a Ud. una extensa carta, a fin de que Ud. intercediera ante su digno esposo, el Excelentísimo Señor Presidente de la República, en el sentido de que, compenetrado de la justicia de mi causa, hiciera a mi favor lo que de su parte estuviera. El corazón magnánimo y bondadoso de la Primera Dama de la Nación, oyó mi súplica y la hizo llegar a conocimiento de S.E. Por intermedio del Señor Secretario General de Gobierno, nuestro querido Presidente, viéndose imposibilitado para prestarme su cooperación por la vía administrativa, me sugirió la idea de hacerlo solicitando del H. Congreso una pensión de gracia. Así lo hice y, con tan buena suerte que, en el transcurso de un mes, Cámara y Senado, despacharon un proyecto que me beneficia con la suma de cinco mil pesos mensuales, aparte, se entiende, de la modesta jubilación de que disfruto. Ahora, pues, sólo resta a S.E. promulgar la ley y, en tal sentido, me he dirigido al Sr. Poblete. Una nueva ayuda de su parte, o sea, un recuerdo a este respecto a S.E., culminaría este servicio y sería un motivo más de reconocimiento y gratitud al ser de corazón grande y generoso, que es la esposa del Primer Magistrado de la República. Todos mis respetos, conjuntamente con mis mejores saludos.",
  // Audio real (grabación de voz), no síntesis. Ruta relativa dentro del repo:
  // ajusta el nombre/carpeta si en GitHub quedó guardado con otro nombre.
  audioEn: "../assets/audio/carta_english.m4a.m4a",
  textEn: "On October 24th, 1951, I took the liberty of sending you a lengthy letter, so that you might intercede before your esteemed husband, His Excellency the President of the Republic, in the sense that, attuned to the justice of my cause, he would do whatever was within his power to help me. The kind and magnanimous heart of the First Lady of the Nation, heard my plea and made it known to S.E. Through the General Secretary of Government, our beloved President, unable to offer me his assistance through administrative channels, suggested that I request a special pension to the H. Congress. That is what I did and, with such luck that, in the span of a month, the Chamber of Deputies and the Senate, both passed a bill that grants me the sum of five thousand pesos per month, in addition, of course, to the modest retirement pension that I currently receive, so, the only thing left to do is for H.E. to enact the law and, with that in mind, I have contacted Mr. Poblete. Another favor from you, in other words a reminder regarding this matter to H.E., would finalize this service and it would be yet another reason to appreciate and be grateful to a generous and big-hearted person, that is the wife of the Chief Magistrate of the Republic. Please accept my deepest respects along with my best regards.",
  tags: ["Documento original del fondo", "Pensión de gracia", "1952"],
  annotations: [
    { label: "Nota marginal", value: "“Special pension” — anotación del archivo sobre el motivo de la carta" },
    { label: "Nota marginal", value: "“Without an address” — indicación de que la carta no incluye dirección de respuesta" },
    { label: "Firma", value: "Ed. Amengual S." },
    { label: "Traducción", value: "Existe versión traducida al inglés (página 2) para exhibición del fondo" }
  ],
  isReal: true,
  // Páginas escaneadas reales del documento (imagen del archivo tal cual).
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/pagina-1.jpg" },
    { label: "Página 2 — traducción caligráfica", src: "../assets/images/pagina-2.jpg" },
    { label: "Página 3 — traducción mecanografiada", src: "../assets/images/pagina-3.jpg" }
  ]
};

// Carta de Jorge Ávila, becado del Instituto Agrícola Pascual Baburiza,
// pidiendo un abrigo. Escrita en Los Andes, Región de Valparaíso.
const letterAvila = {
  id: 2,
  regionCode: "V",
  lat: -32.8342, lng: -70.5981, // Los Andes, Región de Valparaíso
  place: "Escrita en Los Andes",
  city: "Los Andes",
  title: "Solicitud de un abrigo",
  from: "Jorge Ávila",
  to: "Rosa Marmán de González",
  date: "19 de junio de 1952",
  origin: "Instituto Agrícola Pascual Baburiza, Los Andes",
  text: "Sra. Rosa Marmán de González. Mi estimada señora. Hacía mucho tiempo, o sea que desde que llegué al instituto, que no le escribía, señora, no sea que la haya olvidado, sino que esperaba encontrar la manera de escribirle. Señora, si no se acuerda de mí, le diré que fui yo a quien usted le dio una gran beca para el Instituto Agrícola Pascual Baburiza, y de la cual me siento muy orgulloso de ser becado por una gran dama como es usted. También le digo que estoy muy contento con las notas que he sacado en el bimestre. Señora, me va a perdonar por la petición que le voy a hacer. Mi querida señora, le quiero decir que aquí en la escuela hace mucho frío, y si no sería mucha la molestia, le pido que me mande algo para abrigarme; mi mamá es de un hogar honesto y no les alcanza la plata para mandarme un abrigo. Saluda atentamente a usted su agradecido, que nunca la olvidará. Jorge Ávila, Casilla 13, Los Andes. Perdone mi letra y mi mala ortografía.",
  textEn: "Mrs. Rosa Marmán de González. My dear madam. It had been a long time — that is, since I arrived at the institute — that I had not written to you, madam, not because I had forgotten you, but because I was waiting to find the right way to write to you. Madam, in case you don't remember me, I will remind you that I am the one you granted a great scholarship to study at the Pascual Baburiza Agricultural Institute, and I feel very proud to be sponsored by such a great lady as yourself. I am also happy to tell you that I have gotten very good grades this term. Madam, please forgive me for the request I am about to make. My dear madam, I want to tell you that it is very cold here at the school, and if it would not be too much trouble, I would ask you to send me something to keep warm; my mother comes from an honest home and cannot afford to send me a coat. Yours sincerely, your grateful student who will never forget you. Jorge Ávila, P.O. Box 13, Los Andes. Please forgive my handwriting and my poor spelling.",
  tags: ["Instituto Agrícola Pascual Baburiza", "Solicitud de abrigo", "1952"],
  annotations: [
    { label: "Nota marginal", value: "“Abrigo o chompa” — anotación de archivo sobre el motivo de la carta" },
    { label: "Firma", value: "Jorge Ávila, Casilla 13, Los Andes" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/carta-avila-pagina-1.jpg" },
    { label: "Página 2 — original manuscrito", src: "../assets/images/carta-avila-pagina-2.jpg" }
  ]
};

// Carta de Ruth Alegría solicitando trabajo para sostener a su familia.
// Escrita en Santiago, Región Metropolitana.
const letterAlegria = {
  id: 3,
  regionCode: "RM",
  lat: -33.4489, lng: -70.6693, // Santiago
  place: "Escrita en Santiago",
  city: "Santiago",
  title: "Solicitud de trabajo",
  from: "Ruth Alegría",
  to: "Rosa Markman de González Videla",
  date: "23 de agosto de 1952",
  origin: "Concha 1565, Santiago",
  text: "Señora Rosa Markman de González Videla. Presente. Respetada señora: Va usted a perdonar mi atrevimiento al dirigirme a usted, pero en la imposibilidad de hablarle personalmente, le envío esta carta con la esperanza de que me oirá y estudiará mi caso como sólo usted sabe hacerlo. No imagina usted con qué esperanzas le escribo; sé que sólo usted podrá ayudarme, y me dirijo a usted como a mi tabla de salvación, porque sé que usted me ayudará. Soy la hija mayor de una familia a la que, por desgracia, la suerte le ha sido adversa; tengo a mi madre muy delicada de salud y cuatro hermanitos estudiando. Veo con desesperación cómo mi madre hace milagros para hacer rendir los pocos pesos que poseemos hoy, veo cómo esos pocos pesos cada día disminuyen y yo no puedo hacer nada. Solicito trabajo aquí y allá, pero en todas partes las puertas se me cierran; como no he trabajado nunca y no poseo influencias, y soy apolítica, de ahí mi fracaso — pero ¿cómo voy a trabajar si nadie me deja empezar? Usted comprenderá nuestra situación; usted, como mujer de corazón noble, me ayudará. Tengo veintidós años, he cursado hasta mi sexto año de humanidades, y mi nombre es Ruth Alegría; dirección Concha 1565, Santiago. Por favor, señora, ayúdeme y hará la felicidad de esta familia olvidada de la suerte. La saluda muy atenta y respetuosamente, Ruth Alegría.",
  textEn: "Mrs. Rosa Markman de González Videla. Present. Respected madam: You will forgive my boldness in addressing you, but since I am unable to speak with you in person, I am sending you this letter in the hope that you will hear me and consider my case as only you know how to do. You cannot imagine with what hope I write to you; I know that only you can help me, and I turn to you as my last hope, because I know you will help me. I am the eldest daughter of a family that, unfortunately, has been dealt a hard hand by fate; my mother's health is very delicate, and I have four younger siblings still studying. I watch in despair as my mother works miracles to stretch the few pesos we have, and I see those few pesos shrink every day while I can do nothing. I have applied for work here and there, but everywhere the doors close on me; since I have never worked before and have no connections, and I hold no political affiliations, that is the cause of my failure — but how am I to work if no one will let me begin? You will understand our situation; you, as a woman of noble heart, will help me. I am twenty-two years old, I have studied through my sixth year of secondary school, and my name is Ruth Alegría; address: Concha 1565, Santiago. Please, madam, help me, and you will bring happiness to this family forgotten by fortune. Yours very respectfully and sincerely, Ruth Alegría.",
  tags: ["Solicitud de trabajo", "1952"],
  annotations: [
    { label: "Nota marginal", value: "“Trabajo” — anotación de archivo sobre el motivo de la carta" },
    { label: "Firma", value: "Ruth Alegría" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/carta-alegria-pagina-1.jpg" }
  ]
};

// Carta de Valesca Doris Padilla Etter, solicitando una beca para la
// Escuela Normal de Angol. Escrita en Ercilla, Región de la Araucanía.
const letterPadilla = {
  id: 4,
  regionCode: "IX",
  lat: -38.0136, lng: -72.6494, // Ercilla, Región de La Araucanía
  place: "Escrita en Ercilla",
  city: "Ercilla",
  title: "Solicitud de beca para la Escuela Normal de Angol",
  from: "Valesca Doris Padilla Etter",
  to: "Rosa Markmann de González",
  date: "31 de diciembre de 1952",
  origin: "Postulante a la Escuela Normal de Angol",
  text: "Ercilla, 31 de Diciembre de 1952. Valesca Doris Padilla Etter solicita a Ud. una beca para la Escuela Normal de Angol. Sra. Rosa Markmann de González. Santiago. Respetada Dama: Mis primeras palabras son para pedirle me disculpe por haberme tomado la libertad para escribir y pedirle un gran favor, que es el siguiente: yo fui a dar examen en la Escuela Normal de Victoria para la Normal de Angol, y quizás como saldría, pero las comisiones dijeron que más o menos bien, pero que ahora había que tener influjos allá en Santiago para la beca, y por eso me he dirigido a Ud. para pedirle este gran favor, para que Ud. tenga la bondad de ayudarme con sus grandes influjos ante el Primer Mandatario de la República; si es que se puede y si no fuera mucha molestia. Nosotros somos 7 hermanos y sólo la mayor gana, otras dos están con unas tías, 2 hermanos están estudiando, uno en la Escuela Granja de Cajón, el otro en la Industrial de Angol; yo quisiera entrar a la Escuela Normal, para ver si puedo ser profesora, que es la profesión con que he soñado siempre, quisiera ganar para poder educar a mi hermanito menor que sólo cuenta con 9 años, y yo no tengo todavía los 13 años, los cumplo en febrero. Respetada Dama, ruego a Ud. me haga el favor de ayudarme, ya que la situación económica de mi papá está mala, que alcanza apenas para alimentarnos y vestirnos. Respetada Dama, Ud. se dará cuenta que como la situación económica de mi papá está tan mala, gana apenas $5.000 con lo que tenemos que pagar arriendo, vestirnos y comer; apenas nos alcanza. Si no consiguiera una beca no podría seguir estudiando, lo que sería muy triste y pesado para mí, pues mi único anhelo es ser profesora. Ruego me disculpe, respetada Dama, por haberla molestado. La saluda atte. a Ud. Valesca Doris Padilla Etter.",
  textEn: "Ercilla, December 31, 1952. Valesca Doris Padilla Etter respectfully requests a scholarship for the Normal School of Angol. Mrs. Rosa Markmann de González. Santiago. Respected Lady: My first words are to ask you to forgive me for taking the liberty of writing and asking you a great favor, which is the following: I went to take the entrance exam at the Normal School of Victoria for admission to the Normal School of Angol, and although I did reasonably well according to the examining board, they said that now one needs connections there in Santiago to secure the scholarship, and that is why I have turned to you to ask this great favor: that you would be so kind as to help me with your great influence before the President of the Republic, if it can be done and if it is not too much trouble. There are seven of us siblings, and only the eldest earns a wage; two others are staying with aunts, and two brothers are studying — one at the Granja School in Cajón, the other at the Industrial School in Angol. I would like to enter the Normal School, to see if I can become a teacher, which is the profession I have always dreamed of; I would like to earn enough to educate my youngest little brother, who is only 9 years old — I myself am not yet 13, I turn that age in February. Respected lady, I beg you to please help me, since my father's economic situation is so difficult that it is barely enough to feed and clothe us. Respected lady, you will understand that since my father's economic situation is so poor, he earns only $5,000, with which we must pay rent, clothe ourselves and eat — it is barely enough. If I could not obtain a scholarship, I would not be able to continue studying, which would be very sad and hard for me, since my only wish is to become a teacher. I beg your forgiveness, respected lady, for having troubled you. Yours sincerely, Valesca Doris Padilla Etter.",
  tags: ["Escuela Normal de Angol", "Solicitud de beca", "1952"],
  annotations: [
    { label: "Nota marginal", value: "“Ingreso Esc. Normal” — anotación de archivo sobre el motivo de la carta" },
    { label: "Firma", value: "Valesca Doris Padilla Etter" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/carta-padilla-pagina-1.jpg" },
    { label: "Página 2 — original manuscrito", src: "../assets/images/carta-padilla-pagina-2.jpg" }
  ]
};

// Carta de un grupo de maestras, encabezado por la directora Georgina R. de
// Barros, anunciando que su colegio en Quinta Normal llevará su nombre.
const letterColegio = {
  id: 5,
  regionCode: "RM",
  lat: -33.4340, lng: -70.6853, // Quinta Normal, Santiago
  place: "Escrita en Santiago",
  city: "Santiago",
  title: "Homenaje: un colegio llevará su nombre",
  from: "Georgina R. de Barros (Directora) y un grupo de maestras",
  to: "Rosa Markmann de González Videla",
  date: "30 de enero de 1952",
  origin: "Colegio “Sra. Rosa Markmann de González Videla”, Villasana 1454, Quinta Normal, Santiago",
  text: "Rosa Markmann de González Videla. Presente. Distinguida e ilustre señora: Un grupo de maestras que han seguido silenciosas, paso a paso, su magnífica obra de bien hacia los chilenos, conmovidas en lo más hondo de sus pechos por cómo ha repartido el bien su mano bienhechora, queriendo que el olvido no evapore estos hechos sublimes de la “Primera Dama de Chile”, han acordado perpetuar a través del tiempo y de las generaciones su ilustre memoria. Han acordado coger entre las gemas del recuerdo el diamante de su nombre. Han decidido cuajar en el búcaro de los perfumes los que emanan de su sublime corazón, que semejan sólo a los de las santas mujeres de la Biblia y a las gloriosas mujeres de la Historia. Han decidido, ilustre señora, darle nombre de Sra. Rosa Markmann de González Videla a su colegio particular, recientemente fundado en Villasana 1454, en Quinta Normal, donde la amarán tanto y aprenderán a quererla los corazones infantiles al compás de sus rondas y sus ciencias. Hoy el colegio tiene la sencillez de la semilla, pero mañana tendrá las frondas y las fragancias de su nombre. Este grupo de maestras tiene la inmensa satisfacción de participar a la “Primera Dama de Chile” esta noticia y no dudan de su beneplácito. Sin otro particular, ponen a sus órdenes el “Colegio Sra. Rosa Markmann de González Videla” y los servicios del personal. Georgina R. de Barros, Directora. Santiago, 30 de enero de 1952.",
  textEn: "Mrs. Rosa Markmann de González Videla. Present. Distinguished and illustrious lady: A group of teachers who have silently followed, step by step, your magnificent work of good toward the Chilean people, moved to the depths of their hearts by how generously your benevolent hand has shared its goodness, wishing that oblivion never erase these sublime deeds of the “First Lady of Chile,” have agreed to perpetuate your illustrious memory through time and through the generations. They have agreed to gather, among the gems of memory, the diamond of your name. They have decided to preserve, in the vessel of perfumes, those that emanate from your sublime heart, comparable only to those of the holy women of the Bible and the glorious women of History. They have decided, illustrious lady, to give your name — Mrs. Rosa Markmann de González Videla — to their private school, recently founded at Villasana 1454, in Quinta Normal, where the young hearts will come to love you dearly, learning to cherish you through their songs and their studies. Today the school has the simplicity of a seed, but tomorrow it will bear the branches and the fragrance of your name. This group of teachers has the immense satisfaction of sharing this news with the First Lady of Chile, and they do not doubt her approval. Without further matters, they place at your service the school “Mrs. Rosa Markmann de González Videla” and the services of its staff. Georgina R. de Barros, Headmistress. Santiago, January 30, 1952.",
  tags: ["Homenaje", "Colegio con su nombre", "Quinta Normal", "1952"],
  annotations: [
    { label: "Nota de archivo", value: "“Colegio” — anotación de archivo sobre el contenido de la carta" },
    { label: "Firma", value: "Georgina R. de Barros, Directora" }
  ],
  isReal: true,
  // Cada imagen corresponde a una hoja física que contiene 2 páginas
  // numeradas de la carta, tal como quedaron digitalizadas en el archivo.
  pages: [
    { label: "Páginas 1 y 2 — original manuscrito", src: "../assets/images/carta-colegio-paginas-1-2.jpg" },
    { label: "Páginas 3 y 4 — original manuscrito", src: "../assets/images/carta-colegio-paginas-3-4.jpg" }
  ]
};

// Carta de Luis Carrillo, inválido desde la infancia, pidiendo ropa para
// presentarse ante sus compañeros de estudios — con un poema propio
// dedicado a la Primera Dama adjunto en la segunda página.
// Escrita en Coronel, Región del Biobío.
const letterCarrillo = {
  id: 6,
  regionCode: "VIII",
  lat: -37.0166, lng: -73.1367, // Coronel, Región del Biobío
  place: "Escrita en Coronel",
  city: "Coronel",
  title: "Solicitud de ropa, con un poema dedicado a la Primera Dama",
  from: "Luis Carrillo",
  to: "Rosa M. de González Videla",
  date: "8 de agosto de 1952",
  origin: "Manuel Montt 516, Coronel",
  text: "Rosa M. de González V. Santiago. Respetada señora: La presente va dirigida a Ud. con el fin de pedirle un favor, y es lo que sigue. Yo soy inválido; ya hace 17 años perdí la pierna izquierda a causa de una parálisis infantil. Yo no tengo padres, sólo estoy con una viejita la cual me crió de chico; a ella le faltó su marido ya hace 10 años y está incapacitada para trabajar, tiene 70 años. Yo estoy actualmente haciendo un curso de comercio gracias a la ayuda de un sacerdote católico, pero lo que más me falta es la ropa, no tengo cómo presentarme ante mis compañeros de estudios. Yo quedaría profundamente agradecido si me mandara unas piezas, aunque fueran usadas, como ser un abrigo y un terno. Yo se lo pagaré con una fervorosa comunión, porque soy muy católico, señora Rosa. Yo tengo plena confianza en Ud. y creo que mi humilde ruego no ha de ser desoído, porque Ud. atiende con corazón bondadoso a aquel que lo necesita, agradeciéndole de antemano todo lo que haga por mi humilde persona. Se despide respetuosamente de Ud. su amable servidor, Luis Carrillo, Manuel Montt 516, Coronel. — Poema adjunto, “Chile siempre la recordará”: Salud, mi querida dama de la patria, todo chileno te recordará, porque fuiste buena con el necesitado y el premio del recuerdo el pueblo te dará. Jamás algún favor al pobre le negaste, el corazón abierto para todos siempre estaba; fuiste el aliento para el moribundo minero que, en trágicos días de octubre, allá en la mina halló su tumba. Para el niño fuiste madre muy amorosa; junto al juguete lo hiciste, una noche de pascua, soñar; pobre de cada infante, cuando la Navidad se acerque, entre mil ilusiones te podrán a ti recordar. Todos los pobres te damos el adiós de despedida, y una oración al Padre Eterno; por tu felicidad tendremos que rezar, y un día en la celeste morada los podremos encontrar. Coronel, 9 de agosto de 1952. Luis A. Carrillo.",
  textEn: "Rosa M. de González V. Santiago. Respected lady: This letter is addressed to you to ask a favor, which is as follows. I have been disabled for 17 years, since I lost my left leg to childhood polio. I have no parents; I live only with an elderly woman who raised me as a child — her husband passed away 10 years ago, and she is now unable to work, being 70 years old. I am currently taking a business course thanks to the help of a Catholic priest, but what I need most is clothing; I have nothing decent to wear in front of my fellow students. I would be deeply grateful if you could send me a few garments, even if used — such as a coat and a suit. I will repay you with a fervent communion, for I am a devout Catholic, Mrs. Rosa. I place my full trust in you, and I believe my humble request will not go unheard, since you attend with a kind heart to those in need. Thanking you in advance for whatever you may do for this humble person. Respectfully yours, Luis Carrillo, Manuel Montt 516, Coronel. — Attached poem, 'Chile Will Always Remember Her': Hail, my dear lady of the homeland, every Chilean will remember you, because you were kind to those in need, and the reward of memory the people will give you. You never denied a favor to the poor; your heart was always open to all; you were the comfort of the dying miner who, in the tragic days of October, found his grave there in the mine. To the child you were a most loving mother; beside his toy, one Christmas Eve, you let him dream; poor is every infant, for when Christmas draws near, amid a thousand hopes they will remember you. All the poor bid you a farewell, and offer a prayer to the Eternal Father; for your happiness we shall pray, and one day, in the heavenly abode, we shall meet you there. Coronel, August 9, 1952. Luis A. Carrillo.",
  tags: ["Solicitud de ropa", "Poema", "1952"],
  annotations: [
    { label: "Nota de archivo", value: "“Carrillo” — anotación de archivo con el apellido del remitente" },
    { label: "Adjunto", value: "Incluye un poema titulado “Chile siempre la recordará”, fechado el 9 de agosto de 1952" },
    { label: "Firma", value: "Luis Carrillo, Manuel Montt 516, Coronel" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — carta", src: "../assets/images/carta-carrillo-pagina-1.jpg" },
    { label: "Página 2 — poema adjunto", src: "../assets/images/carta-carrillo-pagina-2.jpg" }
  ]
};

// Carta de Isabel Pinilla Cortez, empleada doméstica, pidiendo ayuda para
// comprar una radio pequeña a plazo. Escrita en Viña del Mar, Región de
// Valparaíso.
const letterPinilla = {
  id: 7,
  regionCode: "V",
  lat: -33.0246, lng: -71.5518, // Viña del Mar, Región de Valparaíso
  place: "Escrita en Viña del Mar",
  city: "Viña del Mar",
  title: "Solicitud de una radio pequeña",
  from: "Isabel Pinilla Cortez",
  to: "Rosa Markman de González Videla",
  date: "24 de septiembre de 1952",
  origin: "6 Poniente 207, Viña del Mar",
  text: "Viña del Mar, 24 de septiembre de 1952. Señora Rosa Markman de González Videla. Distinguida señora: Saludo muy respetuosamente a Ud. y ruego perdone que moleste su atención, para pedirle un gran favor que espero sea bien acogido, y apelo a su benevolencia y a su cariño hacia los desamparados. Señora, se trata de una pobre mujer, la que escribe: ejerzo la profesión de sirvienta, y deseo con toda mi alma poder tener un receptor de radio pequeñito, para tener alguna distracción en días de fiesta en que no puedo salir, y rogaría a Ud. se sirva ayudarme con algo de dinero para así sacar uno a plazo, y yo seguiría pagándolo en cuotas mensuales. Yo trabajo en 6 Poniente 207, Viña, y ruego a Dios que este pedido mío sea con buena suerte y no sea desoído mi deseo. De todos modos, gracias, señora, de esta pobre mujer. Isabel Pinilla Cortez.",
  textEn: "Viña del Mar, September 24, 1952. Mrs. Rosa Markman de González Videla. Distinguished lady: I greet you most respectfully and beg your pardon for troubling your attention, to ask you a great favor which I hope will be well received, and I appeal to your kindness and your affection for the needy. Madam, I am a poor woman; I work as a domestic servant, and I wish with all my soul to be able to have a small radio receiver, to have some entertainment on holidays when I cannot go out, and I would ask you to please help me with some money so that I might buy one on installment, which I would then continue paying off in monthly payments. I work at 6 Poniente 207, Viña, and I pray to God that this request of mine may be granted, and that my wish not go unheard. In any case, thank you, madam, from this poor woman. Isabel Pinilla Cortez.",
  tags: ["Solicitud de radio", "1952"],
  annotations: [
    { label: "Nota marginal", value: "“Radio” — anotación de archivo sobre el motivo de la carta" },
    { label: "Firma", value: "Isabel Pinilla Cortez, 6 Poniente 207, Viña del Mar" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/carta-pinilla-pagina-1.jpg" },
    { label: "Página 2 — original manuscrito", src: "../assets/images/carta-pinilla-pagina-2.jpg" }
  ]
};

// Carta de Mercedes Veloso Vergara, madre viuda, pidiendo un préstamo para
// trabajar o, en su defecto, ropa para ella y su hijo. Escrita en
// Concepción, Región del Biobío.
const letterVeloso = {
  id: 8,
  regionCode: "VIII",
  lat: -36.8270, lng: -73.0503, // Concepción, Región del Biobío
  place: "Escrita en Concepción",
  city: "Concepción",
  title: "Solicitud de ropa o un préstamo para trabajar",
  from: "Mercedes Veloso Vergara",
  to: "Rosa M. de González",
  date: "14 de junio de 1952",
  origin: "Caupolicán 1058, Concepción",
  text: "Concepción, 14 de junio de 1952. Distinguida y noble dama, señora Rosa M. de González: Ante todo debo pedir perdón por atreverme a molestarla; espero que ésta tendrá mejor acogida que la primera. Distinguida señora, como Ud. es la mejor madre del mundo, le ruego escuche a esta otra madre atribulada, que se lo pide de todo corazón. Soy viuda, tengo un hijo de 18 años que estudia en el Instituto Superior de Comercio de ésta; mi madre, de 64 años de edad, se encuentra enferma y no puede trabajar, y además tengo a mi cargo una sobrina de 12 años. Yo no puedo encontrar trabajo, y sufro mucho por mantenerme honrada, como corresponde a una madre decente. Mi hijo quiere seguir estudiando para ser un hombre útil a su patria y a sus semejantes, pero no tengo medios de ninguna clase para seguir, pues se encuentra agotado física y moralmente, y me ha pedido que le escriba si Ud. puede ayudarnos en algo, prestándonos dinero para yo trabajar en algo y ganarme la vida, o bien, si puede, mandarme ropa de hombre y de mujer; mi hijo mide 1,70 mt de alto y yo 1,55 mt. Le ruego una vez más perdone si he hecho mal en pedirle esto, pero es que todas las puertas se cierran para mí, y lo hago también guiada por un recuerdo lejano: una señora pidió lo mismo a la noble y bondadosa dama, señora Juanita Aguirre Cerda, y se lo concedió. ¿Por qué no confiar en la mejor de las madres del mundo? Hágalo por sus seres queridos, y le quedaré eternamente agradecida. Querida señora, espero con ansias su respuesta. Saluda atte. a Ud. y queda rogando a Dios que ésta tenga una acogida favorable. Mercedes Veloso Vergara. Caupolicán 1058, Concepción.",
  textEn: "Concepción, June 14, 1952. Distinguished and noble lady, Mrs. Rosa M. de González: First of all I must ask forgiveness for daring to trouble you; I hope this letter receives a better welcome than my first one. Distinguished lady, since you are the best mother in the world, I beg you to listen to this other troubled mother, who asks you with all her heart. I am a widow; I have an 18-year-old son who studies at the Higher Institute of Commerce here; my 64-year-old mother is ill and cannot work, and I also have a 12-year-old niece in my care. I cannot find work, and I suffer greatly trying to remain honest, as befits a decent mother. My son wishes to continue studying to become a man useful to his country and his fellow men, but I have no means whatsoever to continue supporting him, since he is exhausted physically and morally and has asked me to write to you, to see if you could help us in some way — lending us money so that I might work at something and earn a living, or perhaps sending us men's and women's clothing; my son is 1.70 meters tall and I am 1.55 meters. I beg you once again to forgive me if I have done wrong in asking this, but every door has closed for me, and I am also guided by a distant memory: a lady once made the same request to the noble and kind lady, Mrs. Juanita Aguirre Cerda, and she granted it. Why not trust in the best of all mothers? Do it for your loved ones, and I will remain eternally grateful. Dear lady, I anxiously await your reply. Yours very sincerely, and praying to God that this letter finds a favorable reception. Mercedes Veloso Vergara. Caupolicán 1058, Concepción.",
  tags: ["Solicitud de ropa", "1952"],
  annotations: [
    { label: "Nota marginal", value: "“Ropas” — anotación de archivo sobre el motivo de la carta" },
    { label: "Firma", value: "Mercedes Veloso Vergara, Caupolicán 1058, Concepción" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/carta-veloso-pagina-1.jpg" },
    { label: "Página 2 — original manuscrito", src: "../assets/images/carta-veloso-pagina-2.jpg" }
  ]
};

// Carta de Víctor Manuel Jofré Ruiz, solicitando trabajo como cartero de
// Correos y Telégrafos. Escrita en Loncoche, Región de La Araucanía.
const letterJofre = {
  id: 9,
  regionCode: "IX",
  lat: -39.3667, lng: -72.6333, // Loncoche, Región de La Araucanía
  place: "Escrita en Loncoche",
  city: "Loncoche",
  title: "Solicitud de trabajo como cartero",
  from: "Víctor Manuel Jofré Ruiz",
  to: "Rosa M. de González Videla",
  date: "21 de marzo de 1952",
  origin: "Correo, Loncoche",
  text: "Loncoche, 21 de marzo de 1952. Señora Rosa M. de González Videla. Santiago. Distinguida señora: Con el respeto que se merece, me dirijo a Ud. para solicitar su intervención en el caso que expongo a continuación: Soy hijo de madre viuda y a la vez casado, chileno, 23 años cumplidos, nacido y criado en este pueblecito de Loncoche. Deseo ingresar a Correos y Telégrafos como cartero, en cualquier punto de Chile, para lo cual presenté solicitud de ingreso con fecha 22 de febrero del presente año, no teniendo hasta la fecha noticias de cómo van mis trámites; la solicitud la envié por carta certificada, bajo el N° 449, al señor Director General de Correos en Santiago. No hay reemplazo al cartero de ésta, y en fecha próxima éste volverá a reemplazarlo, por lo tanto ya conozco el rodaje del puesto indicado. En ésta soy conocido de todo el pueblo y a la vez de las autoridades; soy merecedor de su ayuda por la situación en que atravieso. En mi poder tengo el último certificado de estudios y también el certificado de antecedentes, y los demás papeles los puedo obtener una vez que me los pidan. Todo lo que haga por mí no tendré cómo pagarle, y si no supiese agradecérselo yo, lo hará Dios. Confiaré en Dios y en Ud. que todo andará bien. Sin otro particular, agradeciendo de antemano todo lo que haga por mí, se despide con todo respeto su atento y seguro servidor. Víctor Jofré R. Dirección: Víctor Manuel Jofré Ruiz, Correo, Loncoche.",
  textEn: "Loncoche, March 21, 1952. Mrs. Rosa M. de González Videla. Santiago. Distinguished lady: With the respect you deserve, I write to you to request your assistance in the matter I set out below. I am the son of a widowed mother, and I am also married; Chilean, 23 years old, born and raised in this small town of Loncoche. I wish to enter the postal and telegraph service as a mail carrier, in any town in Chile, for which I submitted an application on February 22 of this year; I have had no news up to now of how my application is proceeding — I sent the application by certified letter, under number 449, to the Director General of Post Offices in Santiago. There is no substitute for the current mail carrier here, and he will soon be returning to his post, so I am already familiar with the workings of the position in question. Here I am known by the whole town and by the authorities as well, and I believe I deserve your help given the situation I am going through. I have in my possession my most recent school certificate as well as my certificate of good conduct; the remaining documents I can obtain once they are requested of me. I will have no way to repay whatever you may do for me, and if I should fail to show my gratitude, God will reward you in my place. I place my trust in God and in you, that all will go well. Without further ado, thanking you in advance for whatever you may do for me, I remain, with all respect, your obedient servant. Víctor Jofré R. Address: Víctor Manuel Jofré Ruiz, Post Office, Loncoche.",
  tags: ["Solicitud de trabajo", "Correos y Telégrafos", "1952"],
  annotations: [
    { label: "Nota de archivo", value: "“Jofré” — anotación de archivo con el apellido del remitente" },
    { label: "Firma", value: "Víctor Manuel Jofré Ruiz, Correo, Loncoche" }
  ],
  isReal: true,
  pages: [
    { label: "Página 1 — original manuscrito", src: "../assets/images/carta-jofre-pagina-1.jpg" },
    { label: "Página 2 — original manuscrito", src: "../assets/images/carta-jofre-pagina-2.jpg" }
  ]
};

// Carta de Ema Acevedo, operaria del Arsenal Naval, pidiendo un contrato fijo.
// Escrita en Valparaíso. Transcripción: TRANS; inglés: TRAD PE (revisada por la traductora).
const letterAcevedo = {
  "id": 10,
  "regionCode": "V",
  "lat": -33.0472,
  "lng": -71.6127,
  "place": "Escrita en Valparaíso",
  "city": "Valparaíso",
  "title": "Solicitud de trabajo fijo",
  "from": "Ema Acevedo",
  "to": "Rosa Markmann de Gonzáles",
  "date": "30 de enero de 1952",
  "origin": "Arsenal Naval de Valparaíso, taller de confección de ropa",
  "text": "Mi mas respetada i siempre recordada señora después de saludarla i deceando se encuentre bien de salud, paso a comunicarle lo que sigue. Perdone Ud señora que la moleste pero mi necesidad señora es tan grande que yo me dirijo a Ud, esperando ser hoida señora aqui biene mi triste historia. Señora soi una operaria del Arcenal Naval de Valparaiso, pertenesco al taller de confección de ropa desde el año 34 dentre el mes de Febrero a trabajar hasta hoi dia que me dirijo a Ud, señora yo tengo en mi poder 2 niños huerfanos uno de 12 años el niño, la niñita de 11 años yo tengo todos los documentos de ellos papel del civil papel de bautismo defunción de su padre su madre enferma invalida de su mano derecha ademas le dan fuertes ataques no puede trabajar está es la historia de estas creaturas, yo señora he hecho todo lo umanamente posible por encerrarlos a todos no he podido, al niño queria colocarlo en el Hogar Arturo Prat o escuela de menores no hai vacante, a la niñita en las monjas hai que pagar lo menos $300 pesos mensuales tampoco puedo, porque mi situación economica no me lo permite a la madre de estas creaturas queria colocarla en el Hogar la Paz de Limache nada e conseguido señora todo imposible. La Visitadora de la Armada sabe todo cuanto me pasa ella conoce los niños ella a ido a mi casa sabe mi situación por la cual atravieso ella me ayudado con ropita para los niños con tarritos de leche, ella a echo lo que a podido pero no hemos podido conseguir nada, porque yo señora no tengo con que pagar no me alcanza mi escaso sueldo yo soi operaria a trato no tengo sueldo fijo hai meses que saco $1,500 pesos i meses que saco $1,200 de hai tengo que pagar mi almuerzo en mi trabajo el hilo conque trabajo i las agujas de maquina i asi señora si yo estuviera de planta ganara algo mas que seria $2,260 pesos mensuales yo haría todo lo que pudiera por estas creaturas inocentes desamparadas ellos no reciben un 20 de nadie nada mas que lo que yo puedo hacer por ellos. Señora en mi trabajo todas las operarias ganan asignación familiar por hijos $415 pesos yo no porque no son mis hijos yo señora seria su eterna agradecida si Ud isiera algo por mi toda mi vida le agradeceria mientras esistiera, yo señora todos los dias le pediria al señor en mis oraciones por su feliz escistencia. Todo cuanto le digo señora es la verdad hai esta la visitadora señora Beatriz de Espinoza que lo sabe todo ella a llegado a mi casa sabe que ocupo una pieza inabitable porque no hai para otra mejor ella me dice paciencia señora las penas no son eternas pero desde el mes de Marzo del 51 i no hemos podido conseguir nada para estas creaturas se perdio el año sin ponerlos a la escuela yo quero ponerlos al colegio para que aprendan i no queden ignorantes. Señora yo pido a Ud que se me contrate a al formal para tener un sueldo fijo. Ud señora lo puede conseguir devido a su alta influencia que Ud tiene Ud lo puede ordenar i eso se cumple ya yo tendría conque alimentar i vestir a los niños i mandarlos al colegio porque ya tendría algo seguro, yo tambien a Ud se lo daria a saber desde el momento que los colocara a la escuela. Y si Ud no puede conseguir que se mejore mi situación por medio de mi trabajo colocandolos en algun asilo o casa de Huerfanos porque a mi con mi escaso recurso me es imposible seguir con estos niños a mi lado los quiero señora i les tengo mucha lastima pero mi vida se hace completamente imposible lo que yo gano fruto de mi trabajo lo tengo que gastar en ellos. Señora yo espero de su noble i humanitario corazon que haga algo por mi i por estas creaturas que hai un Dios Todopoderoso que premia nuestras buenas acciones i cuando se hace el bien a quien lo necesita como estos niños huerfanos que no tienen su padre i su madre invalida i al mismo tiempo sufre de ataques i ella no tiene ni para ella que puede darle a sus hijos. Señora me dirijo a Ud porque creo que es buena i de umanitario corazon i que Ud me ayudara. Como también creo en vuestro esposo nuestro gran Presidente incansable en trabajar i hacer el bien en medio de tantas incomprenciones injustas i amargas pero ya llegara el tiempo en que lo reconoceran porque el bien es conocido cuando la persona se muere o se ba. Yo señora a nuestro Presidente no me dirijo porque se que el tiene mucha preocupación mucho trabajo. Dignisima señora hai le mando mi tarjeta de Indentidad Profesional para justificarle a Ud que soi operaria del Arcenal Certificada de la Visitadora social señora Beatriz de Espinoza desde esta fecha yo he hecho todo lo umanamente posible por hacer algo por estos niños hai estan sin escuela nada se ha conseguido. Señora como nada he conseguido como ultimo recurso clamo a Ud a ver si Ud se apiada de mi i me ayuda en mi dificil situación por la cual atravieso i me deja en este año un recuerdo perdurable que no se me olvidara jamas yo siempre la recordare i sabre decirles a ellos el dia de mañana cuando sean jovenes que si saben leer escribir i pueden ganarce la vida hondradamente eso se lo deveran a nuestra esposa del que fue nuestro Presidente Gonzales Videla. Dignisima señora Ud puede pedir mis calificaciones que a fin de año los dan todo los años i el tiempo que yo presto mis servicios al Arcenal Naval de Valparaiso para que Ud puede enseguida pedir ante mis jefes superiores señores Almirantes Torres Hevia yo pueda quedar contratada a al formal una horden de nuestros jefes se cumple ya yo tendría como darle la educación el pan i el techo donde se cobijaran estas creaturas desamparadas. Dignisima señora perdoneme Ud que yo la moleste pero mis deceos señora de colocar a los niños a la escuela son tan grande que por eso me dirijo a Ud por que se que Ud me ayudara. Ruego a Ud me devuelva mi tarjeta de trabajo i me mande unas letras para saber yo señora si Ud puede hacer algo por mi Al Arcenal de Valparaiso perdone todas las faltas que en esta carta hayan poque yo nunca escribo señora a nadie porque no tengo a quien contarle mis penas, unicamente tomo la lapicera para firmar el recibo de pago una vez al mes perdone mis faltas. Dignisima señora me despido de Ud deceandole muchas felicidades en el presente año en compañia de vuestro esposo i familia. Y que se encuentre gozando de una perfecta salud son los deseos de esta pobre i umilde hobrera que aquí queda en espera de lo que buestra señora haga.",
  "textEn": "My most respected and ever-remembered lady after greeting you and wishing you good health, I proceed to inform you of the following. Forgive me Mrs. for bothering you but my need Mrs. is so great that I turn to you, hoping to be heard Mrs. here comes my sad story. Mrs. I am a worker at the Arsenal Naval of Valparaiso, I have been in the garment-making workshop since the year 34 I entered in February to work until today when I turn to you, Mrs. I have in my care 2 orphan children one 12 years old the boy, the little girl 11 years old I have all their documents civil paper baptism paper death certificate of their father their mother sick disabled in her right hand besides she suffers severe attacks she cannot work this is the story of these creatures, I Mrs. have done everything humanly possible to place them all I have not been able to, the boy I wanted to place him in the Hogar Arturo Prat or minors' school there are no vacancies, the little girl at the nuns you have to pay at least $300 pesos monthly I cannot either, because my financial situation does not allow me to I wanted to place the mother of these creatures I wanted to place in the Hogar la Paz of Limache I have achieved nothing Mrs. everything is impossible. The Navy Social Worker knows everything that happens to me she knows the children she has gone to my house knows the situation that I am going she has helped me with clothes for the children with little cans of milk, she has done what she could but we have not been able to achieve anything, because I Mrs. have nothing to pay with my scarce wage is not enough for me I am a piece-rate worker I do not have a fixed wage there are months I make $1,500 pesos and months I make $1,200 from that I have to pay for my lunch at my work the thread with which I work and the machine needles and so Mrs. if I were on the permanent staff I would earn a bit more which would be $2,260 pesos monthly and I would do everything I could for these innocent helpless creatures they do not receive any money from anyone nothing more than what I can do for them. Mrs. at my work all the female workers earn a family allowance for children $415 pesos I do not because they are not my children I Mrs. would be eternally grateful to you if you did something for me all my life I would thank you while I existed, I Mrs. every day would ask the Lord in my prayers for your happiness. Everything I tell you Mrs. is the truth there is the social worker Mrs. Beatriz de Espinoza who knows everything she has gone to my house and knows that I occupy an uninhabitable room because there is no money for a better one she tells me patience lady sorrows are not eternal but since March of 51 we have not been able to achieve anything for these creatures the year passed by without putting them in school I want to put them in school so that they learn and do not remain ignorant. Mrs. I ask you to be hired as permanent staff to have a fixed wage. You Mrs. can achieve it due to the strong influence that you have you can order it and it is done then I would have enough to feed and clothe the children and send them to school because I would already have something secure, I would also let you know from the moment I placed them in school. And if you cannot get my situation improved through my job by placing them in some shelter or House of Orphans because for me with my scarce resources it is impossible to continue with these children by my side I love them Mrs. and feel great pity for them but my life becomes completely impossible what I earn as the fruit of my labor I have to spend on them. Mrs. I hope from your noble and humanitarian heart that you do something for me and for these creatures for there is an Almighty God who rewards our good actions and when good is done to those who need it like these orphan children who do not have their father and their mother is disabled and also suffers from attacks and she does not even have enough for herself what can she give to her children. Mrs. I turn to you because I believe you are good and have a humanitarian heart and that you will help me. I also believe in your husband our great President tirelessly working and doing good in the midst of so many unjust and bitter misunderstandings but the time will come when they will recognize him because good is known when the person dies or leaves. I Mrs. do not turn to our President because I know he has many worries and plenty of work. Most dignified lady here I send you my Professional Identity card to prove to you that I am a worker of the Arsenal certified by the social worker Mrs. Beatriz de Espinoza since this date I have done everything humanly possible to do something for these children and there they are without school nothing has been achieved. Mrs. as I have achieved nothing as a last resort I cry out to you to see if you take pity on me and help me in my difficult situation through which I am passing and leave me in this year a lasting memory that I will never forget I will always remember you and will let them know one day when they are older that if they know how to read write and can earn an honest living they will owe that to the wife of he who was our President Gonzales Videla. Most dignified lady you can request my evaluations that are given at the end of every year and the time that I provide my services to the Arcenal Naval of Valparaiso so that you can right away request before my superior bosses Messrs. Admirals Torres Hevia that I be hired on the permanent staff an order from our bosses is fulfilled then I would have how to give education bread and the roof under which these helpless creatures would be sheltered. Most dignified madam forgive me for bothering you but my desire Mrs. to place the children in school is so great that that I turn to you because I know you will help me. I pray you return my card to me and send me a few lines so I know Mrs. if you can do something for me to the Arsenal of Valparaiso forgive all the mistakes that may be in this letter because I never write Mrs. to anyone because I have no one to tell my sorrows to, I only take the pen to sign the pay receipt once a month forgive my mistakes. Most dignified lady I bid you farewell wishing you much happiness in the present year in the company of your husband and family. And that you find yourself enjoying perfect health are the wishes of this poor and humble woman worker who remains here awaiting whatever your ladyship does.",
  "tags": [
    "Arsenal Naval de Valparaíso",
    "Solicitud de trabajo",
    "1952"
  ],
  "annotations": [
    {
      "label": "Nota marginal",
      "value": "«Trabajo fijo» — anotación de archivo sobre el motivo de la carta"
    },
    {
      "label": "Nota marginal",
      "value": "«Devolver [ilegible]» — indicación de devolver la tarjeta de identidad adjunta"
    },
    {
      "label": "Firma",
      "value": "Ema Acevedo"
    }
  ],
  "isReal": true,
  "pages": [
    {
      "label": "Página 1 — original manuscrito",
      "src": "../assets/images/carta-acevedo-pagina-1.jpg"
    },
    {
      "label": "Página 2 — original manuscrito",
      "src": "../assets/images/carta-acevedo-pagina-2.jpg"
    },
    {
      "label": "Página 3 — original manuscrito",
      "src": "../assets/images/carta-acevedo-pagina-3.jpg"
    },
    {
      "label": "Página 4 — original manuscrito",
      "src": "../assets/images/carta-acevedo-pagina-4.jpg"
    },
    {
      "label": "Página 5 — original manuscrito",
      "src": "../assets/images/carta-acevedo-pagina-5.jpg"
    },
    {
      "label": "Página 6 — original manuscrito",
      "src": "../assets/images/carta-acevedo-pagina-6.jpg"
    }
  ]
};

const CARTAS = [realLetter, letterAvila, letterAlegria, letterPadilla, letterColegio, letterCarrillo, letterPinilla, letterVeloso, letterJofre, letterAcevedo];
