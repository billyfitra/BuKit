// scripts/detail.js

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

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const seniId = urlParams.get('id');
    if (seniId) {
        fetch(`https://api-budayakita-19232555a6f8.herokuapp.com/api/seni/${seniId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("namaSeni").textContent = data.nama;
                document.getElementById("daerahSeni").textContent = data.daerah;
                document.getElementById("deskripsiSeni").innerHTML = data.deskripsi.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
                document.getElementById("videoLink").src = data.videoLink;
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});
