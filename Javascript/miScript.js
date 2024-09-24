// JavaScript para el carrusel de imágenes
const images = [
    "Imagenes/IMG_1251.jpg",
    "Imagenes/IMG_2083.jpg",
    "Imagenes/IMG_0901.jpg",
    "Imagenes/IMG_1794.jpg",
    "Imagenes/IMG_1288.jpg",
    "Imagenes/IMG_1646.jpg",
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const indicators = document.querySelectorAll(".indicator");

function updateImage() {
    mainImage.src = images[currentIndex];
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Inicializa la primera imagen y los indicadores
updateImage();
