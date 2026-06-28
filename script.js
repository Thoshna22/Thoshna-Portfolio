const typingItems = [
  "QA Enthusiast",
  "Machine Learning Learner",
  "UI/UX Designer",
  "Cybersecurity Explorer",
  "IT Undergraduate"
];

const skills = [
  {
    title: "Software Quality Assurance",
    icon: "QA",
    level: 88,
    items: ["Manual Testing", "Test Case Design", "Bug Reporting", "API Testing with Postman", "Basic Selenium Automation"]
  },
  {
    title: "Programming & Development",
    icon: "</>",
    level: 82,
    items: ["Python", "Java", "PHP", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Machine Learning & Intelligent Systems",
    icon: "AI",
    level: 78,
    items: ["Predictive Modeling", "Data Preprocessing", "Model Evaluation", "Healthcare Intelligent Systems"]
  },
  {
    title: "Database Management",
    icon: "DB",
    level: 76,
    items: ["MySQL", "SQL Queries", "Database Design"]
  },
  {
    title: "Cybersecurity Fundamentals",
    icon: "SEC",
    level: 74,
    items: ["Ethical Hacking Concepts", "Vulnerability Assessment", "Network Security", "Security Best Practices"]
  },
  {
    title: "UI/UX & Prototyping",
    icon: "UX",
    level: 84,
    items: ["Figma", "User-Centered Design", "Prototyping", "Usability Testing"]
  },
  {
    title: "Soft Skills",
    icon: "★",
    level: 90,
    items: ["Teamwork", "Communication", "Leadership", "Creativity", "Problem Solving", "Time Management"]
  }
];

const projects = [
  {
    title: "SMART Kidney Care",
    initials: "CKD",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    description: "An intelligent system for early detection and monitoring of chronic kidney disease using machine learning for prediction and stage classification.",
    details: "SMART Kidney Care focuses on early CKD detection, dynamic stage monitoring, and patient progress tracking. The project combines healthcare data analysis, predictive modeling, and intelligent system thinking to support better healthcare outcomes."
  },
  {
    title: "Smart Home Control Mobile Application",
    initials: "UX",
    tech: ["Figma", "UI/UX Design"],
    description: "A user-centered smart home mobile app prototype focused on usability and accessibility.",
    details: "Designed a clean mobile experience for controlling smart home features, with attention to accessibility, simple navigation, visual hierarchy, and daily-use ergonomics.",
    sourceLabel: "Figma",
    sourceUrl: "https://www.figma.com/design/p9d2uUEPRHCItrS0e7AcEq/Smart-Home-Control?node-id=0-1&t=yEs3TQai5R6iAu8y-1",
    demoUrl: "https://youtu.be/-ShKVoZw5Ds"
  },
  {
    title: "Information Systems Security Analysis for MAS Holdings",
    initials: "SEC",
    tech: ["Risk Assessment", "Firewalls", "IDS/IPS", "Security Policies"],
    description: "Performed security analysis and proposed improvements for organizational security.",
    details: "Analyzed organizational security risks and recommended practical controls including policy improvements, firewall practices, intrusion detection/prevention concepts, and better security governance.",
    hideExternalActions: true
  },
  {
    title: "Neural Network for Predicting Final Exam Scores",
    initials: "NN",
    tech: ["Python", "TensorFlow/Keras", "Pandas", "NumPy"],
    description: "Developed a neural network model using student performance data.",
    details: "Built a predictive neural network workflow using student performance attributes, model training, evaluation, and result interpretation to estimate final exam outcomes."
  },
  {
    title: "Fungal Colony Detection in Yoghurt Using Image Processing",
    initials: "CV",
    tech: ["Python", "OpenCV", "NumPy"],
    description: "Image processing system for detecting fungal contamination in food samples.",
    details: "Applied image processing concepts to identify fungal colony patterns in yoghurt samples, supporting food safety screening through computer vision techniques.",
    hideExternalActions: true
  },
  {
    title: "Network Design for a Mid-Sized Company",
    initials: "NET",
    tech: ["Cisco Packet Tracer", "VLANs", "DHCP"],
    description: "Designed a scalable and secure network infrastructure with VLANs and DHCP.",
    details: "Planned a mid-sized company network with segmentation, addressing, DHCP services, and secure topology thinking to support reliable organizational connectivity.",
    hideExternalActions: true
  }
];

const values = [
  ["Continuous Learning", "Keeps improving through curiosity, practice, and reflection.", "↗"],
  ["Teamwork", "Contributes with respect, communication, and shared ownership.", "◎"],
  ["Integrity", "Values honesty, responsibility, and careful professional conduct.", "✓"],
  ["Innovation", "Looks for thoughtful ways to solve problems with technology.", "✦"],
  ["Professionalism", "Brings reliability, discipline, and attention to detail.", "◆"],
  ["Helping Others", "Enjoys using knowledge to support people and communities.", "♡"],
  ["Creativity", "Combines design sensitivity with structured technical thinking.", "✎"],
  ["Commitment & Dedication", "Stays focused on meaningful goals and consistent growth.", "∞"]
];

const typingText = document.querySelector("#typingText");
let typingIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeLoop() {
  const word = typingItems[typingIndex];
  typingText.textContent = deleting ? word.slice(0, letterIndex--) : word.slice(0, letterIndex++);

  if (!deleting && letterIndex > word.length + 8) deleting = true;
  if (deleting && letterIndex < 0) {
    deleting = false;
    typingIndex = (typingIndex + 1) % typingItems.length;
    letterIndex = 0;
  }

  setTimeout(typeLoop, deleting ? 45 : 82);
}

function renderSkills() {
  const grid = document.querySelector("#skillsGrid");
  grid.innerHTML = skills.map(skill => `
    <article class="skill-card reveal">
      <div class="skill-top">
        <span class="skill-icon">${skill.icon}</span>
        <div class="skill-ring" style="--value:${skill.level * 3.6}deg"><span>${skill.level}%</span></div>
      </div>
      <h3>${skill.title}</h3>
      <div class="tag-list">${skill.items.map(item => `<span>${item}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderProjects() {
  const grid = document.querySelector("#projectGrid");
  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal">
      <div class="project-visual">${project.initials}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="project-actions">
        <button type="button" data-project="${index}">View Details</button>
        ${project.hideExternalActions ? "" : `
          <a href="${project.sourceUrl || "https://github.com/Thoshna22"}" target="_blank" rel="noreferrer">${project.sourceLabel || "GitHub"}</a>
          <a href="${project.demoUrl || "#contact"}" ${project.demoUrl ? 'target="_blank" rel="noreferrer"' : ""}>Live Demo</a>
        `}
      </div>
    </article>
  `).join("");
}

function renderValues() {
  const grid = document.querySelector("#valuesGrid");
  grid.innerHTML = values.map(([title, text, icon]) => `
    <article class="value-card reveal">
      <span class="value-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function createParticles() {
  const field = document.querySelector(".particle-field");
  for (let i = 0; i < 28; i += 1) {
    const star = document.createElement("span");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * -4}s`;
    star.style.opacity = `${0.2 + Math.random() * 0.55}`;
    field.appendChild(star);
  }
}

function createBubbles() {
  const layer = document.querySelector(".bubble-layer");
  if (!layer) return;

  for (let i = 0; i < 70; i += 1) {
    const bubble = document.createElement("span");
    const size = 3 + Math.random() * 7;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.setProperty("--size", `${size}px`);
    bubble.style.setProperty("--duration", `${16 + Math.random() * 18}s`);
    bubble.style.setProperty("--delay", `${Math.random() * -28}s`);
    bubble.style.setProperty("--drift", `${-42 + Math.random() * 84}px`);
    layer.appendChild(bubble);
  }
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 48));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        entry.target.textContent = `${current}+`;
      }, 28);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function setupScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${(window.scrollY / max) * 100}%`;

    let active = null;
    for (let index = sections.length - 1; index >= 0; index -= 1) {
      if (sections[index].offsetTop - 150 <= window.scrollY) {
        active = sections[index];
        break;
      }
    }
    navLinks.forEach(link => link.classList.toggle("active", active && link.getAttribute("href") === `#${active.id}`));
  }, { passive: true });
}

function setupCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  window.addEventListener("pointermove", event => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.animate({
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    }, { duration: 260, fill: "forwards" });
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const more = document.querySelector(".nav-more");
  const moreToggle = document.querySelector(".more-toggle");

  moreToggle.addEventListener("click", event => {
    event.stopPropagation();
    const isOpen = more.classList.toggle("open");
    moreToggle.classList.toggle("active", isOpen);
    moreToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", event => {
    if (!more.contains(event.target)) {
      more.classList.remove("open");
      moreToggle.classList.remove("active");
      moreToggle.setAttribute("aria-expanded", "false");
    }
  });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", event => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
      more.classList.remove("open");
      moreToggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      moreToggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupProjectModal() {
  const modal = document.querySelector("#projectModal");
  const content = document.querySelector("#modalContent");
  const close = document.querySelector(".modal-close");

  document.querySelector("#projectGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-project]");
    if (!button) return;
    const project = projects[Number(button.dataset.project)];
    content.innerHTML = `
      <p class="eyebrow">Project Details</p>
      <h2>${project.title}</h2>
      <p>${project.details}</p>
      <div class="project-tech">${project.tech.map(item => `<span>${item}</span>`).join("")}</div>
    `;
    modal.showModal();
  });

  close.addEventListener("click", () => modal.close());
  modal.addEventListener("click", event => {
    if (event.target === modal) modal.close();
  });
}

function setupContactForm() {
  const form = document.querySelector(".contact-form");
  const button = form.querySelector("button[type='submit']");

  form.addEventListener("submit", () => {
    button.textContent = "Sending...";
    button.disabled = true;
  });
}

renderSkills();
renderProjects();
renderValues();
createParticles();
createBubbles();
typeLoop();
setupReveal();
animateCounters();
setupScrollProgress();
setupCursor();
setupNavigation();
setupProjectModal();
setupContactForm();
