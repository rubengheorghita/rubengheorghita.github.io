// JavaScript functionality can be added here

document.addEventListener('DOMContentLoaded', () => {
    console.log('E-commerce website loaded');

    // Example: Adding functionality for Add to Cart button
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});

// Toggle search input visibility on click with smooth dropdown effect
document.getElementById("search-icon").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents immediate closing due to the document click listener
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("search-input");

    // Toggle the active class to initiate the dropdown
    searchContainer.classList.toggle("active");

    // Focus on the input field when it appears, clear it if closed
    if (searchContainer.classList.contains("active")) {
        searchInput.focus();
    } else {
        searchInput.value = ""; // Clear input if closed
    }
});

// Close search input if clicking outside, with smooth effect
document.addEventListener("click", function(event) {
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("search-input");

    // Check if the click happened outside the search container and icon
    if (!searchContainer.contains(event.target) && searchContainer.classList.contains("active")) {
        searchContainer.classList.remove("active");
        searchInput.value = ""; // Clear input when closed
    }
});

function openPanel(panelId) {
    document.getElementById(panelId).classList.add('active');
}

function closePanel(panelId) {
    document.getElementById(panelId).classList.remove('active');
}

// Close account and cart panels when clicking outside
document.addEventListener('click', function(event) {
    const accountPanel = document.getElementById('account-panel');
    const cartPanel = document.getElementById('cart-panel');
    const accountIcon = document.querySelector('.account-icon');
    const cartIcon = document.querySelector('.cart-icon');

    // Close panels if the click happened outside both the panel and its respective icon
    if (!accountPanel.contains(event.target) && event.target !== accountIcon) {
        closePanel('account-panel');
    }
    if (!cartPanel.contains(event.target) && event.target !== cartIcon) {
        closePanel('cart-panel');
    }
});

// JavaScript to toggle the mobile menu
document.querySelector('.menu-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent triggering outside click handler
    const mobileMenu = document.querySelector('.mobile-menu-panel');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu if clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.querySelector('.mobile-menu-panel');
    const menuIcon = document.querySelector('.menu-icon');

    if (!mobileMenu.contains(event.target) && event.target !== menuIcon) {
        mobileMenu.classList.remove('active');
    }
});

// Toggle mobile menu visibility function for calling
function toggleMobileMenu() {
    document.querySelector('.mobile-menu-panel').classList.toggle('active');
}

// Prevent unwanted menu closing when interacting with menu items
document.querySelector('.mobile-menu-panel').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing the menu when clicking inside
});