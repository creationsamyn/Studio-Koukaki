document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.swiper', {
        spaceBetween: 60,//Define el espacio entre cada slide en píxeles.
        speed: 1000,// Define la velocidad de la transición entre los slides en milisegundos.
        autoplay: {
            delay: 2500,//Define el tiempo de espera en milisegundos entre cada transición automática de slide.
        },
        effect: 'coverflow',
        grabCursor: true,//Booleano que indica si se debe cambiar el cursor del mouse al hacer hover sobre el contenedor para indicar que es posible agarrar o deslizar.
        centeredSlides: true,// Booleano que indica si el slide activo debe estar centrado en el contenedor.
        loop: true,//Booleano que indica si el slider debe volver al primer
        slidesPerView: 3,//Define cuántos slides se muestran simultáneamente en el contenedor.
        coverflowEffect: { //Objeto que define las opciones específicas del efecto 'coverflow':
            rotate: 60,//Define el ángulo de rotación de los slides.
            stretch: 0,//Define cuánto se estira el slide en el centro.
            depth: 100,//Define la profundidad del efecto.
            modifier: 1,// Define un valor adicional para modificar otros parámetros.
            slideShadows: false,//Booleano que indica si se deben mostrar sombras en los slides.
        },
    });
});

  