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

// Fungsi untuk mengambil data dari API dan menambahkan ke galeri
let galleryData = [];

async function loadGallery() {
    try {
        const response = await fetch('https://api-budayakita-19232555a6f8.herokuapp.com/api/seni');
        const data = await response.json();
        galleryData = data;
        displayGallery(data);
    } catch (error) {
        console.error('Error fetching the data', error);
    }
}

function displayGallery(data) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const card = document.createElement('div');
        card.classList.add('card');

        const video = document.createElement('iframe');
        video.src = item.videoLink.replace('watch?v=', 'embed/');
        video.width = "100%";
        video.height = "315";
        video.frameBorder = "0";
        video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        video.allowFullscreen = true;

        const title = document.createElement('h2');
        title.textContent = item.nama;

        // Tambahkan event listener untuk navigasi ke halaman detail
        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${item._id}`;
        });

        card.appendChild(video);
        card.appendChild(title);
        galleryItem.appendChild(card);
        galleryContainer.appendChild(galleryItem);
    });
}

function filterGallery() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredData = galleryData.filter(item => item.nama.toLowerCase().includes(searchInput));
    displayGallery(filteredData);
}

// Panggil fungsi loadGallery saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadGallery);
