// main.js

// Carrosel
const carrosel = document.querySelector('.carrosel');
const carroselItems = document.querySelectorAll('.carrosel-item');

let currentSlide = 0;

function showNextSlide() {
  carroselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % carroselItems.length;
  carroselItems[currentSlide].classList.add('active');
}

function showPrevSlide() {
  carroselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + carroselItems.length) % carroselItems.length;
  carroselItems[currentSlide].classList.add('active');
}

carrosel.addEventListener('click', (e) => {
  if (e.target.classList.contains('next')) {
    showNextSlide();
  } else if (e.target.classList.contains('prev')) {
    showPrevSlide();
  }
});

// Quizzes
const quizzes = document.querySelectorAll('.quizzes-item');

quizzes.forEach((quiz) => {
  quiz.addEventListener('click', () => {
    quiz.classList.toggle('active');
  });
});

// Menu hamburguer
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuHamburguerCheckbox = document.querySelector('.menu-hamburguer-checkbox');

menuHamburguerCheckbox.addEventListener('change', () => {
  menuHamburguer.classList.toggle('active');
});