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
          setTimeout(digita, 1800); // Pausa depois de escrever tudo
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

      setTimeout(digita, apagando ? 50 : 100); // velocidade de digitação/apagamento
    }

    digita();


    /* <div class="txtsobre">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#a48edb"><path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/></svg>
             
                <p><i class="fa-brands fa-html5"></i>  Html 5</p>
                <p><i class="fa-brands fa-css3"></i>  Css 3</p>
                <p><i class="fa-brands fa-react"></i>  React</p>
                <p><i class="fa-brands fa-square-js"></i>  JavaScrpit</p>
                <p><i class="fa-brands fa-wordpress-simple"></i>  wordpress</p> 
                <p><i class="fa-brands fa-typescript"></i>  TypeScript</p> 
                <p><i class="fa-brands fa-figma"></i>  Figma</p>*/