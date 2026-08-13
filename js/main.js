```javascript
/* =========================================================
   IDIOMAS
========================================================= */

const translations = {

  pt: {

    subtitle: "Desenvolvedor Fullstack",

    nav_about: "Sobre",
    nav_technologies: "Tecnologias",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    about_title: "Sobre mim",

    about_text:
      "Desenvolvedor com experiência em integração de sistemas, APIs REST, bancos de dados e automação de processos. Atuação focada em backend, performance e soluções para ambientes produtivos.",

    technologies_title: "Tecnologias",

    projects_title: "Projetos",

    contact_title: "Contato",

    nfce_short:
      "Exportação automática de XML de NFC-e.",

    goleo_short:
      "Plataforma de partidas de futebol estilo Tonsser.",

    footer:
      "© 2026 • Lucas Palumbo",

    modal_github:
      "Ver no GitHub",

    modal_technologies:
      "Tecnologias:"

  },


  en: {

    subtitle: "Fullstack Developer",

    nav_about: "About",
    nav_technologies: "Technologies",
    nav_projects: "Projects",
    nav_contact: "Contact",

    about_title: "About me",

    about_text:
      "Developer with experience in systems integration, REST APIs, databases and process automation. Focused on backend development, performance and solutions for production environments.",

    technologies_title: "Technologies",

    projects_title: "Projects",

    contact_title: "Contact",

    nfce_short:
      "Automatic NFC-e XML export system.",

    goleo_short:
      "Football match platform inspired by Tonsser.",

    footer:
      "© 2026 • Lucas Palumbo",

    modal_github:
      "View on GitHub",

    modal_technologies:
      "Technologies:"

  },


  es: {

    subtitle: "Desarrollador Fullstack",

    nav_about: "Sobre mí",
    nav_technologies: "Tecnologías",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    about_title: "Sobre mí",

    about_text:
      "Desarrollador con experiencia en integración de sistemas, APIs REST, bases de datos y automatización de procesos. Enfocado en backend, rendimiento y soluciones para entornos productivos.",

    technologies_title: "Tecnologías",

    projects_title: "Proyectos",

    contact_title: "Contacto",

    nfce_short:
      "Sistema de exportación automática de XML de NFC-e.",

    goleo_short:
      "Plataforma de partidos de fútbol inspirada en Tonsser.",

    footer:
      "© 2026 • Lucas Palumbo",

    modal_github:
      "Ver en GitHub",

    modal_technologies:
      "Tecnologías:"

  }

};


/* =========================================================
   IDIOMA ATUAL
========================================================= */

let currentLanguage = "pt";


/* =========================================================
   TROCAR IDIOMA
========================================================= */

function changeLanguage(language) {

  if (!translations[language]) {
    return;
  }


  currentLanguage = language;


  const dictionary =
    translations[language];


  /*
    Atualiza os textos da página.
  */

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;


      if (dictionary[key]) {

        element.textContent =
          dictionary[key];

      }

    });


  /*
    Atualiza o idioma do documento.
  */

  const htmlLanguage = {

    pt: "pt-BR",

    en: "en",

    es: "es"

  };


  document.documentElement.lang =
    htmlLanguage[language];


  /*
    Atualiza o botão.
  */

  const languageLabel = {

    pt: "PT",

    en: "EN",

    es: "ES"

  };


  document
    .getElementById("currentLanguage")
    .textContent =
      languageLabel[language];


  /*
    Salva a preferência.
  */

  localStorage.setItem(
    "portfolioLanguage",
    language
  );


  /*
    Fecha o menu.
  */

  document
    .getElementById("languageMenu")
    .classList.remove("show");


  /*
    Se houver modal aberto,
    atualiza o idioma dele.
  */

  const modal =
    document.getElementById("projectModal");


  if (
    modal.style.display === "flex"
  ) {

    const activeProject =
      modal.dataset.project;


    if (activeProject) {

      renderModal(activeProject);

    }

  }

}


/* =========================================================
   MENU DE IDIOMAS
========================================================= */

function toggleLanguageMenu() {

  document
    .getElementById("languageMenu")
    .classList.toggle("show");

}


/* =========================================================
   FECHAR MENU AO CLICAR FORA
========================================================= */

document.addEventListener(
  "click",
  function(event) {

    const selector =
      document.querySelector(
        ".language-selector"
      );


    if (
      !selector.contains(
        event.target
      )
    ) {

      document
        .getElementById(
          "languageMenu"
        )
        .classList.remove("show");

    }

  }
);


/* =========================================================
   CARREGAR IDIOMA
========================================================= */

function loadLanguage() {

  const savedLanguage =
    localStorage.getItem(
      "portfolioLanguage"
    );


  if (
    savedLanguage &&
    translations[savedLanguage]
  ) {

    changeLanguage(
      savedLanguage
    );

  } else {

    changeLanguage("pt");

  }

}


/* =========================================================
   ABAS
========================================================= */

function showSection(id) {

  document
    .querySelectorAll(".section")
    .forEach(section => {

      section.classList.remove(
        "active"
      );

    });


  const section =
    document.getElementById(id);


  if (!section) {
    return;
  }


  section.classList.add("active");


  const header =
    document.querySelector(
      ".header"
    );


  window.scrollTo({

    top: header.offsetHeight,

    behavior: "smooth"

  });

}


/* =========================================================
   PROJETOS
========================================================= */

const projects = {

  nfce: {

    title:
      "NFCe Exporter",


    descriptions: {

      pt:
        "Sistema profissional de exportação de XML de NFC-e a partir de banco SQL Server.",

      en:
        "Professional NFC-e XML export system using a SQL Server database.",

      es:
        "Sistema profesional de exportación de XML de NFC-e utilizando una base de datos SQL Server."

    },


    details: {

      pt: [

        "Interface gráfica em Tkinter",

        "Conexão via ODBC com SQL Server",

        "Exportação em lote de documentos fiscais",

        "Tratamento de exceções e logs",

        "Compatível com PyInstaller"

      ],


      en: [

        "Graphical interface built with Tkinter",

        "ODBC connection to SQL Server",

        "Batch export of fiscal documents",

        "Exception handling and logging",

        "Compatible with PyInstaller"

      ],


      es: [

        "Interfaz gráfica desarrollada con Tkinter",

        "Conexión ODBC con SQL Server",

        "Exportación por lotes de documentos fiscales",

        "Manejo de excepciones y registros",

        "Compatible con PyInstaller"

      ]

    },


    tech:
      "Python • SQL Server • ODBC • Tkinter",


    github:
      "https://github.com/Lucas-Palumbo"

  },


  goleo: {

    title:
      "Goleo",


    descriptions: {

      pt:
        "Plataforma social de partidas de futebol inspirada no Tonsser.",

      en:
        "Social football match platform inspired by Tonsser.",

      es:
        "Plataforma social de partidos de fútbol inspirada en Tonsser."

    },


    details: {

      pt: [

        "Cadastro e gerenciamento de partidas",

        "Sistema de participantes",

        "Timeline de eventos da partida",

        "Upload de mídia",

        "Avaliação de desempenho",

        "Backend em Node.js com PostgreSQL"

      ],


      en: [

        "Match registration and management",

        "Participant management system",

        "Match event timeline",

        "Media upload",

        "Performance evaluation",

        "Backend built with Node.js and PostgreSQL"

      ],


      es: [

        "Registro y gestión de partidos",

        "Sistema de participantes",

        "Línea de tiempo de eventos del partido",

        "Carga de archivos multimedia",

        "Evaluación del rendimiento",

        "Backend desarrollado con Node.js y PostgreSQL"

      ]

    },


    tech:
      "Node.js • PostgreSQL • Sequelize • API REST",


    github:
      "https://github.com/Lucas-Palumbo"

  }

};


/* =========================================================
   ABRIR MODAL
========================================================= */

function openModal(id) {

  if (!projects[id]) {
    return;
  }


  const modal =
    document.getElementById(
      "projectModal"
    );


  modal.dataset.project = id;


  renderModal(id);


  modal.style.display = "flex";

}


/* =========================================================
   RENDERIZAR MODAL
========================================================= */

function renderModal(id) {

  const project =
    projects[id];


  if (!project) {
    return;
  }


  const dictionary =
    translations[
      currentLanguage
    ];


  const description =
    project.descriptions[
      currentLanguage
    ];


  const details =
    project.details[
      currentLanguage
    ];


  const detailsList =
    details
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("");


  document
    .getElementById(
      "modalBody"
    )
    .innerHTML = `

      <h2>
        ${project.title}
      </h2>

      <p>
        ${description}
      </p>

      <ul>
        ${detailsList}
      </ul>

      <p>
        <b>
          ${dictionary.modal_technologies}
        </b>

        ${project.tech}
      </p>

      <p>

        <a
          href="${project.github}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${dictionary.modal_github}
        </a>

      </p>

    `;

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeModal() {

  const modal =
    document.getElementById(
      "projectModal"
    );


  modal.style.display = "none";


  delete modal.dataset.project;

}


/* =========================================================
   FECHAR MODAL AO CLICAR FORA
========================================================= */

window.addEventListener(
  "click",
  function(event) {

    const modal =
      document.getElementById(
        "projectModal"
      );


    if (
      event.target === modal
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   ESC FECHA MODAL
========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   CIRCUITO / PARTÍCULAS
========================================================= */

const canvas =
  document.getElementById(
    "circuit"
  );


const ctx =
  canvas.getContext("2d");


let width;

let height;


let particles = [];


const particleCount = 70;


/* =========================================================
   RESIZE
========================================================= */

function resize() {

  const header =
    document.querySelector(
      ".header"
    );


  width =
    canvas.width =
      window.innerWidth;


  height =
    canvas.height =
      header.offsetHeight;

}


window.addEventListener(
  "resize",
  resize
);


resize();


/* =========================================================
   PARTICLE
========================================================= */

class Particle {

  constructor() {

    this.x =
      Math.random() *
      width;


    this.y =
      Math.random() *
      height;


    this.vx =
      (Math.random() - 0.5) *
      0.4;


    this.vy =
      (Math.random() - 0.5) *
      0.4;


    this.radius = 1.5;

  }


  move() {

    this.x += this.vx;

    this.y += this.vy;


    if (
      this.x < 0 ||
      this.x > width
    ) {

      this.vx *= -1;

    }


    if (
      this.y < 0 ||
      this.y > height
    ) {

      this.vy *= -1;

    }

  }


  draw() {

    ctx.beginPath();


    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    );


    ctx.fillStyle =
      "#38bdf8";


    ctx.fill();

  }

}


/* =========================================================
   INICIALIZAR PARTÍCULAS
========================================================= */

function initParticles() {

  particles = [];


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    particles.push(
      new Particle()
    );

  }

}


/* =========================================================
   CONECTAR PARTÍCULAS
========================================================= */

function connectParticles() {

  for (
    let i = 0;
    i < particles.length;
    i++
  ) {

    for (
      let j = i + 1;
      j < particles.length;
      j++
    ) {

      const dx =
        particles[i].x -
        particles[j].x;


      const dy =
        particles[i].y -
        particles[j].y;


      const dist =
        Math.sqrt(
          dx * dx +
          dy * dy
        );


      if (dist < 120) {

        ctx.strokeStyle =
          "rgba(56,189,248,0.15)";


        ctx.lineWidth = 1;


        ctx.beginPath();


        ctx.moveTo(
          particles[i].x,
          particles[i].y
        );


        ctx.lineTo(
          particles[j].x,
          particles[j].y
        );


        ctx.stroke();

      }

    }

  }

}


/* =========================================================
   ANIMAÇÃO
========================================================= */

function animate() {

  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  particles.forEach(
    particle => {

      particle.move();

      particle.draw();

    }
  );


  connectParticles();


  requestAnimationFrame(
    animate
  );

}


/* =========================================================
   START
========================================================= */

initParticles();

animate();

loadLanguage();
```
