/*particles-js CONFIG*/
particlesJS('content',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": false,
          "value_area": 394.58004845442963
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "top-right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
/*particles-js CONFIG*/

/*SIMPLE BAR*/
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById('page');
  const simpleBar = new SimpleBar(target, {autoHide: false});
});
/*(() => {
  console.log('sdsdsds');
})();*/
/*SIMPLE BAR*/

/*AGE*/
document.addEventListener("DOMContentLoaded", () => {
  const birthday = new Date(2000, 10, 23);
  document.getElementById('htmlAge').innerText = Math.floor((new Date().getTime() - birthday.getTime()) / 86400000 / 365);
});
/*AGE*/

/*LANGUAGES*/
const language = {
  ru: {
    'textName': 'Искра Юрий, ',
    'textAge': ' лет. ',
    'textProfession': 'Веб-разработчик.',
  },
  us: {
    'textName': 'Iskra Yurii, ',
    'textAge': ' years. ',
    'textProfession': 'Web developer.',
  }
};

const setLanguage = language => {
  for (let element in language) {
    document.getElementById(element).innerText = language[element];
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(language.ru);
});

document.getElementById('languageRu').addEventListener('click', () => {
  setLanguage(language.ru);
});
document.getElementById('languageUs').addEventListener('click', () => {
  setLanguage(language.us);
});
/*LANGUAGES*/