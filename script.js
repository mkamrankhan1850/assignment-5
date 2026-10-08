// Mobile menu

function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");
}


// Buy button

function showMessage() {
    alert("Thank you for choosing VoltRide! 🚲⚡");
}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links").classList.remove("active");
    });
});