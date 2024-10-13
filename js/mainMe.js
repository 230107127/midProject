// Массив с путями к изображениям
const images = [
    './img/me1.JPG',
    './img/me2.jpg',
    './img/me3.jpg',
    './img/me4.jpg',
    './img/me7.jpg',
    './img/me8.jpg',
];

// Функция для выбора случайного изображения
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Функция для смены изображения в контейнере .about-me_image
function changeImage() {
    const newImage = getRandomImage();
    $('.about-me_image img').attr('src', newImage);
}

// Запускаем смену изображения каждые 3 секунды
$(document).ready(function() {
    setInterval(changeImage, 3000); // Меняем изображение каждые 3 секунды
});
