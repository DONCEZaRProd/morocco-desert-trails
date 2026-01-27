// Simple script to handle smooth scrolling or mobile menu in future
document.addEventListener('DOMContentLoaded', () => {
    console.log("Morocco Desert Trails Website Loaded");
    
    // Future: Add Mobile Menu Toggle logic here
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // Note: You need to add .nav-active styles in CSS for mobile menu to show
        });
    }
});
