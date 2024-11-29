let slideIndex = 1; // Cambiado a 1 para inicializar el primer slide
showSlides(slideIndex);

// Cambiar a un slide específico
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Ir a un slide específico
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Mostrar el slide actual
function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1; // Volver al primero si se pasa
  if (n < 1) slideIndex = slides.length; // Ir al último si retrocede desde el primero

  slides.forEach(slide => {
    slide.style.display = "none";
  });

  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Desactiva el cambio automático si prefieres usar solo los botones:
// Comenta o elimina la siguiente línea si no necesitas el cambio automático
setInterval(() => changeSlide(1), 5000);
