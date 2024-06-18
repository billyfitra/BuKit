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