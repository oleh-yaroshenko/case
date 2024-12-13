document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.main-slider-wrapper');
    const carouselSlides = document.querySelectorAll('.main-slider-wrapper-card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const paginationContainer = document.querySelector('.main-slider-pagination');

    let currentIndex = 0;

    carouselSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('main-slider-pagination-dot');
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        paginationContainer.appendChild(dot);
    });

    const paginationDots = document.querySelectorAll('.main-slider-pagination-dot');

    function updatePagination() {
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showSlide(index) {
        if (index >= carouselSlides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselSlides.length - 1;
        } else {
            currentIndex = index;
        }
        carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updatePagination();
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});

const menu = document.querySelector(".header-mobile")
const menuShow = document.querySelector(".header-burger")
const menuHide = document.querySelector(".header-mobile-burger")

menuShow.addEventListener("click", function () {
    menu.classList.add("header-mobile-show")
})

menuHide.addEventListener("click", function () {
    menu.classList.remove("header-mobile-show")
})