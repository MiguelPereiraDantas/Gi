// Adiciona funcionalidade de carrossel automático
const carousel = document.getElementById('album-carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Velocidade de deslocamento ajustável
    carousel.scrollLeft = scrollLeft - walk;
});

// Carrossel automático
let intervalId;

function startCarousel() {
    intervalId = setInterval(() => {
        carousel.scrollLeft += 3; // Velocidade de deslocamento ajustável
    }, 50); // Intervalo de tempo para cada deslocamento
}

function stopCarousel() {
    clearInterval(intervalId);
}

carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

startCarousel(); // Inicia o carrossel automaticamente ao carregar a página
