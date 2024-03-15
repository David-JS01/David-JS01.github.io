document.addEventListener('DOMContentLoaded', function() {
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
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
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
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
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
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
  });
});
 
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de desplegable
var acc = document.getElementsByClassName("accordion-btn");

// Recorrer todos los botones
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Alternar la clase 'active' para mostrar u ocultar el contenido
        this.classList.toggle("active");

        // Obtener el siguiente elemento hermano (el contenido)
        var content = this.nextElementSibling;
        
        var openAccordions = document.querySelectorAll('.active');
        for (var j = 0; j < openAccordions.length; j++) {
            if (openAccordions[j] !== this) {
                openAccordions[j].classList.remove('active');
                var openContent = openAccordions[j].nextElementSibling;
                openContent.style.maxHeight = null;
            }
        }

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = "1500" + "px";
          }
    });
}


});



/////////
document.addEventListener('DOMContentLoaded', function() {
  const typedText = document.getElementById('typed-text');
  const fixedText = document.getElementById('fixed-text');
  const phrases = ["Pentesting", "Hacking ético", "Software Developer", "Análisis de riesgos", "Red Team",  "Continuidad de negocio"];
  let phraseIndex = 0;
  let index = 0;
  
  function typeWriter() {
      if (index < phrases[phraseIndex].length) {
          typedText.textContent += phrases[phraseIndex].charAt(index);
          index++;
          setTimeout(typeWriter, 50); // Velocidad de escritura (milisegundos)
      } else {
          // Si se ha escrito completamente una frase, pasa a la siguiente frase
          setTimeout(eraseText, 1000); // Espera 1 segundo antes de comenzar a escribir la siguiente frase
      }
  }

  function eraseText() {
    if (index >= 0) {
        typedText.textContent = phrases[phraseIndex].substring(0, index);
        index--;
        setTimeout(eraseText, 50); // Velocidad de borrado (milisegundos)
    } else {
        // Si se ha borrado completamente una frase, pasa a la siguiente frase
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typedText.textContent = ''; // Limpia el contenido para escribir la siguiente frase
        index = 0;
        setTimeout(typeWriter, 500); // Espera 1 segundo antes de comenzar a escribir la siguiente frase
    }
}
  
  typeWriter();
  
});

