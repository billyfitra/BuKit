// Navbar
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// blog alert
function showAlert() {
    const alert = document.getElementById('alert');
    alert.classList.add('show');
    
    // Close alert automatically after 5 seconds
    setTimeout(() => {
        closeAlert();
    }, 3000);
}

function closeAlert() {
    const alert = document.getElementById('alert');
    alert.classList.remove('show');
}

// Hero Section
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

// Galeri
let galleryIndex = 0;
showGallerySlides();

function showGallerySlides() {
    let slides = document.querySelectorAll('.gallery-slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-galleryIndex * 100}%)`;
    });
}

function plusGallerySlides(n) {
    let slides = document.querySelectorAll('.gallery-slide');
    galleryIndex += n;
    if (galleryIndex >= slides.length / 3) {galleryIndex = 0;}
    if (galleryIndex < 0) {galleryIndex = Math.ceil(slides.length / 3) - 1;}
    showGallerySlides();
}

// Blog
let blogIndex = 0;
showBlogSlides();

function showBlogSlides() {
    let slides = document.querySelectorAll('.blog-slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-blogIndex * 100}%)`;
    });
}

function plusBlogSlides(n) {
    let slides = document.querySelectorAll('.blog-slide');
    blogIndex += n;
    if (blogIndex >= slides.length / 3) {blogIndex = 0;}
    if (blogIndex < 0) {blogIndex = Math.ceil(slides.length / 3) - 1;}
    showBlogSlides();
}