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

    overlay.addEventListener("click", () => {
      drawer.classList.remove("open");
      hamburger.classList.remove("active");
      overlay.classList.remove("show");
    });