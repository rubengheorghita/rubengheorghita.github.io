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

// Toggle search input visibility on click
document.getElementById("search-icon").addEventListener("click", function() {
    const searchContainer = document.querySelector(".search-container");
    searchContainer.classList.toggle("active");
    
    // Focus on the input field when it appears
    const searchInput = document.getElementById("search-input");
    if (searchContainer.classList.contains("active")) {
        searchInput.focus();
    } else {
        searchInput.value = ""; // Clear input if closed
    }
});

// Close search input if clicking outside
document.addEventListener("click", function(event) {
    const searchContainer = document.querySelector(".search-container");
    const searchInput = document.getElementById("search-input");

    // Check if the click happened outside the search container
    if (!searchContainer.contains(event.target) && searchContainer.classList.contains("active")) {
        searchContainer.classList.remove("active");
        searchInput.value = ""; // Clear input when closed
    }
});

// Function to open a panel by ID
function openPanel(panelId) {
    document.getElementById(panelId).classList.add('active');
}

// Function to close a panel by ID
function closePanel(panelId) {
    document.getElementById(panelId).classList.remove('active');
}

// Close panels when clicking outside
document.addEventListener('click', function(event) {
    const accountPanel = document.getElementById('account-panel');
    const cartPanel = document.getElementById('cart-panel');

    if (!accountPanel.contains(event.target) && !cartPanel.contains(event.target)) {
        if (!event.target.closest('.icon-text')) { // Exclude text icons from closing action
            closePanel('account-panel');
            closePanel('cart-panel');
        }
    }
});