// Карусель с подписями
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateCarousel();
}

// Назначаем кнопки
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

// Автопрокрутка карусели (раз в 4 секунды)
if (slides.length > 0) {
    setInterval(nextSlide, 4000);
}

// Попап
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close');

function openModal() {
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    if (modal) modal.style.display = 'none';
}

document.querySelectorAll('.btn-popup').forEach(btn => {
    btn.addEventListener('click', openModal);
});

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
    if (modal && e.target === modal) {
        closeModal();
    }
});