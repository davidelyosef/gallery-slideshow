(() => {
  let slideIndex = 1;
  let onHover = false;
  let interval = setInterval(() => plusSlides(1), 4500);
  // Document Ready
  document.addEventListener("DOMContentLoaded", function (event) {
    try {
      showSlides();
    } catch (error) {}

    const prev = document.getElementsByClassName("prev")[0];
    const next = document.getElementsByClassName("next")[0];
    prev.addEventListener("click", () => plusSlides(-1));
    next.addEventListener("click", () => plusSlides(1));

    const dots = document.getElementsByClassName("dot");
    for (let i = 1; i <= dots.length; i++) {
      dots[i - 1].addEventListener("click", () => currentSlide(i));
    }

    const divEl = document.querySelector("#divEl");

    divEl.addEventListener("mouseenter", () => {
      onHover = true;
      clearInterval(interval);
    });

    divEl.addEventListener("mouseleave", () => {
      onHover = false;
      interval = setInterval(() => plusSlides(1), 4500);
    });
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    if (n) $("#defaultImage").remove();
    else n = 1;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
})();
