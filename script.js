// =========================================
// SCRIPT.JS - Updated with New Menu Structure
// =========================================

const translations = {
    fr: {
        "nav-home": "Accueil",
        "nav-escapades": "Escapades",
        "nav-treks": "Treks",
        "nav-excursions": "Excursions",
        "nav-family": "Séjours Famille",
        "nav-booking": "Réservation",
        "nav-contact": "Contact",
        
        "title-escapades": "Nos Escapades",
        "desc-escapades": "Voyages courts pour découvrir l'essentiel du Maroc.",
        "title-treks": "Treks & Randonnées",
        "desc-treks": "Aventure à pied dans l'Atlas et le Sahara.",
        "title-excursions": "Excursions d'une journée",
        "desc-excursions": "Départ de Marrakech ou Ouarzazate.",
        "title-family": "Séjours Famille",
        "desc-family": "Des expériences adaptées pour les petits et les grands.",
        
        "btn-book": "Réserver",
        "reviews-title": "Avis des voyageurs"
    },
    en: {
        "nav-home": "Home",
        "nav-escapades": "Getaways",
        "nav-treks": "Treks",
        "nav-excursions": "Day Trips",
        "nav-family": "Family Stays",
        "nav-booking": "Booking",
        "nav-contact": "Contact",

        "title-escapades": "Our Getaways",
        "desc-escapades": "Short trips to discover the essence of Morocco.",
        "title-treks": "Treks & Hiking",
        "desc-treks": "Walking adventures in the Atlas and Sahara.",
        "title-excursions": "Day Trips",
        "desc-excursions": "Departing from Marrakech or Ouarzazate.",
        "title-family": "Family Trips",
        "desc-family": "Experiences tailored for kids and adults.",

        "btn-book": "Book Now",
        "reviews-title": "What Travelers Say"
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-escapades": "جولات",
        "nav-treks": "مشي جبلي",
        "nav-excursions": "رحلات يومية",
        "nav-family": "رحلات عائلية",
        "nav-booking": "حجز",
        "nav-contact": "اتصل بنا",

        "title-escapades": "جولاتنا المميزة",
        "desc-escapades": "رحلات قصيرة لاكتشاف جوهر المغرب.",
        "title-treks": "المشي والتجوال",
        "desc-treks": "مغامرات في جبال الأطلس والصحراء.",
        "title-excursions": "رحلات يومية",
        "desc-excursions": "تنطلق من مراكش أو ورزازات.",
        "title-family": "رحلات عائلية",
        "desc-family": "تجارب مصممة خصيصاً للكبار والصغار.",

        "btn-book": "احجز الآن",
        "reviews-title": "آراء المسافرين"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Language Logic
    const langSelector = document.getElementById('language-selector');
    
    // Set default lang to French based on user request structure
    // But allow switching
    
    langSelector.addEventListener('change', (e) => {
        const lang = e.target.value;
        if (lang === 'ar') {
            document.documentElement.setAttribute('lang', 'ar');
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', 'ltr');
        }
        
        // Translate elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
    });

    // 2. Mobile Menu Logic
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                 nav.classList.remove('nav-active');
                 burger.classList.remove('toggle');
            });
        });
    }

    // 3. Lightbox Logic (Zoom)
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.getElementsByClassName("close")[0];
    const galleryImages = document.querySelectorAll('.gallery-grid img'); // Make sure you keep gallery grid in HTML if needed

    if(galleryImages) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });
    }

    if(closeBtn) {
        closeBtn.onclick = function() { modal.style.display = "none"; }
    }
    window.onclick = function(event) {
        if (event.target == modal) { modal.style.display = "none"; }
    }
});
