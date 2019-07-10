particlesJS("particles-js", {
  particles: {
    number: { value: 180, density: { enable: true, value_area: 800 } },
    color: { value: "#ff9501" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#ff9501" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 419.5804195804196,
        size: 4,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 50 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});