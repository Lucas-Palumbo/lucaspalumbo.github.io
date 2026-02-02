/* ===== ABAS ===== */
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  window.scrollTo({
    top: document.querySelector('.header').offsetHeight,
    behavior: 'smooth'
  });
}

/* ===== PROJETOS ===== */
const projects = {
  nfce: {
    title: "NFCe Exporter",
    description: "Sistema profissional de exportação de XML de NFC-e a partir de banco SQL Server.",
    details: `
      <ul>
        <li>Interface gráfica em Tkinter</li>
        <li>Conexão via ODBC com SQL Server</li>
        <li>Exportação em lote de documentos fiscais</li>
        <li>Tratamento de exceções e logs</li>
        <li>Compatível com PyInstaller</li>
      </ul>
    `,
    tech: "Python • SQL Server • ODBC • Tkinter",
    github: "https://github.com/Lucas-Palumbo"
  },

  goleo: {
    title: "Goleo",
    description: "Plataforma social de partidas de futebol inspirada no Tonsser.",
    details: `
      <ul>
        <li>Cadastro e gerenciamento de partidas</li>
        <li>Sistema de participantes</li>
        <li>Timeline de eventos da partida</li>
        <li>Upload de mídia</li>
        <li>Avaliação de desempenho</li>
        <li>Backend em Node.js com PostgreSQL</li>
      </ul>
    `,
    tech: "Node.js • PostgreSQL • Sequelize • API REST",
    github: "https://github.com/Lucas-Palumbo"
  }
};

function openModal(id) {
  const p = projects[id];

  document.getElementById('modalBody').innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.description}</p>
    ${p.details}
    <p><b>Tecnologias:</b> ${p.tech}</p>
    <p><a href="${p.github}" target="_blank">Ver no GitHub</a></p>
  `;

  document.getElementById('projectModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('projectModal').style.display = "none";
}

/* ===== CIRCUITO ===== */
const canvas = document.getElementById('circuit');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 70;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = document.querySelector('.header').offsetHeight;
}

window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = 1.5;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.strokeStyle = 'rgba(56,189,248,0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach(p => {
    p.move();
    p.draw();
  });

  connectParticles();
  requestAnimationFrame(animate);
}

initParticles();
animate();
