document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('#navbar');
  const navImg = document.querySelector(".nav-logo img");
  const navLinks = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section');
  const listToggle = document.getElementById("listToggle");
  const list = document.getElementById("list");
  const panelToggle = document.getElementById('theme-panel-toggle');
  const panel = document.getElementById('custom-demo-panel');
  const panelContent = document.querySelector('.demo-panel-content');
  const toggleIcon = document.querySelector('#demo-thumbnail i');
  const demoButtons = document.querySelectorAll('.demo-panel-btn');
  const scrollToTopBtn = document.querySelector(".up");

  listToggle.addEventListener("click", function () {
    list.classList.toggle("d-none");
    list.classList.toggle("d-block");
  });

  window.addEventListener('scroll', function () {
    const scrollYValue = window.scrollY || document.documentElement.scrollTop;

    if (scrollYValue > 50) {
      navbar.classList.add('scrolled');
      navImg.src = "../IMG/restaurant-2-dark.png";
      listToggle.style.color = '#000';
    } else {
      navbar.classList.remove('scrolled');
      navImg.src = "../IMG/restaurant-2-light.png";
    }

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollYValue >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });

    if (scrollYValue >= 1000) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  scrollToTopBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  panelToggle.addEventListener('click', function () {
    panel.classList.toggle('panel-open');

    if (panel.classList.contains('panel-open')) {
      panelContent.style.opacity = 1;
      panelContent.style.maxHeight = '1000px';
      toggleIcon.classList.replace('fa-gear', 'fa-xmark');
      toggleIcon.style.color = "red";
    } else {
      panelContent.style.opacity = 0;
      panelContent.style.maxHeight = '0';
      toggleIcon.classList.replace('fa-xmark', 'fa-gear');
      toggleIcon.style.color = "#333";
    }
  });

  demoButtons.forEach(function (button) {
    button.addEventListener('mouseover', function () {
      button.style.transform = 'translateY(-5px)';
      button.style.transition = 'all 0.3s ease';
      button.style.backgroundColor = 'rgb(68, 68, 68)';
    });
    button.addEventListener('mouseout', function () {
      button.style.transform = 'translateY(0)';
      button.style.backgroundColor = '#c1ab84';
    });
  });
});