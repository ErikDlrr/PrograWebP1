let slideIndex = 0; // Inicializa un índice para las diapositivas del carrusel

showSlides(); // Llama a la función showSlides para comenzar el carrusel

function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img'); // Selecciona todas las imágenes dentro del contenedor del carrusel
  
  for (let i = 0; i < slides.length; i++) { // Recorre todas las imágenes
    slides[i].classList.remove('active'); // Elimina la clase 'active' de todas las imágenes
  }

  slideIndex++; // Incrementa el índice de la diapositiva
  
  if (slideIndex > slides.length) { slideIndex = 1; } // Si el índice de la diapositiva es mayor que el número de diapositivas, lo reinicia a 1
  
  slides[slideIndex - 1].classList.add('active'); // Agrega la clase 'active' a la diapositiva actual

  setTimeout(showSlides, 3000); // Llama a la función showSlides cada 2 segundos para cambiar la diapositiva
}

// Obtén los botones por su ID
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Obtén todas las imágenes en el carrusel
var images = document.querySelectorAll('.carousel-content img');

// Establece un índice para saber qué imagen está actualmente activa
var activeImageIndex = 0;

// Función para cambiar la imagen activa
function changeActiveImage(newIndex) {
  // Elimina la clase 'active' de la imagen actualmente activa
  images[activeImageIndex].classList.remove('active');

  // Añade la clase 'active' a la nueva imagen activa
  images[newIndex].classList.add('active');

  // Actualiza el índice de la imagen activa
  activeImageIndex = newIndex;
}

// Añade un controlador de eventos al botón 'prevBtn'
prevBtn.addEventListener('click', function() {
  // Calcula el índice de la nueva imagen activa
  var newIndex = activeImageIndex - 1;
  if (newIndex < 0) {
    newIndex = images.length - 1;
  }

  // Cambia la imagen activa
  changeActiveImage(newIndex);
});

// Añade un controlador de eventos al botón 'nextBtn'
nextBtn.addEventListener('click', function() {
  // Calcula el índice de la nueva imagen activa
  var newIndex = activeImageIndex + 1;
  if (newIndex >= images.length) {
    newIndex = 0;
  }

  // Cambia la imagen activa
  changeActiveImage(newIndex);
});