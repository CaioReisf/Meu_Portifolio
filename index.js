
const tempoCarregamento = 2000; 

window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    
    loadingScreen.classList.add("fade-out");

   
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 800); 
  }, tempoCarregamento);
});



window.addEventListener('scroll', function () {
    const header = document.getElementById('meuHeader');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
})

    const hamburger = document.getElementById("hamburger");
    const drawer = document.getElementById("drawerMenu");
    const overlay = document.getElementById("overlay");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      drawer.classList.toggle("open");
      overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () =>    {
      drawer.classList.remove("open");
      hamburger.classList.remove("active");
      overlay.classList.remove("show");
    });


     const el = document.getElementById("text");
    const frases = [
      "Desenvolvedor Full-Stack",
      "Desenvolvedor Freelancer",
      "Especialista em Front-End"
    ];

    let fraseIndex = 0;
    let charIndex = 0;
    let apagando = false;

    function digita() {
      const fraseAtual = frases[fraseIndex];
      if (!apagando) {
        el.textContent = fraseAtual.substring(0, charIndex + 1);
        charIndex++;
        el.style.color ='#a48edb'

        if (charIndex === fraseAtual.length) {
          apagando = true;
          setTimeout(digita, 1800);
          return;
        }
      } else {
        el.textContent = fraseAtual.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          apagando = false;
          fraseIndex = (fraseIndex + 1) % frases.length;
        }
      }

      setTimeout(digita, apagando ? 50 : 100); 
    }

    digita();

