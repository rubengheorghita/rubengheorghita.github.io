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