export default {
    background: {
      color: {
        value:"--yellow-theme-nav-background-color",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "var(--selected-theme-main-color)",
      },
      
     
      collisions: {
        enable:false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 100,
        },
        value: 80,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "star",
      },
      size: {
        value: { min: 2, max: 4 },
      },
    },
    detectRetina: true,
  };
  