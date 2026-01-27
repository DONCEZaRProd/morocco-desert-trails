const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-tours": "Tours",
        "nav-gallery": "Gallery",
        "nav-book": "Book Now",
        "hero-title": "Unveil the Magic of the Moroccan Sahara",
        "hero-sub": "More than a trip, it’s a journey into the soul of Morocco.",
        "btn-start": "Start Your Adventure",
        "about-title": "Why Choose Us?",
        "feat-1-title": "Luxury Camps",
        "feat-1-desc": "Sleep under the stars with the comfort of a private suite.",
        "feat-2-title": "Local Experts",
        "feat-2-desc": "Born in the desert, we know every dune and hidden gem.",
        "feat-3-title": "Custom Memories",
        "feat-3-desc": "Tailor-made itineraries for photographers and families.",
        "tour-title": "Most Popular Tour",
        "tour-name": "The Golden Route: 3 Days",
        "tour-desc": "Cross the High Atlas Mountains, visit Ait Ben Haddou, and spend a magical night in the dunes.",
        "tour-btn": "Book This Tour",
        "gallery-title": "Our Moments",
        "footer-text": "Follow us for daily inspiration from the dunes."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-tours": "Circuits",
        "nav-gallery": "Galerie",
        "nav-book": "Réserver",
        "hero-title": "Dévoilez la magie du Sahara marocain",
        "hero-sub": "Plus qu'un voyage, c'est une plongée dans l'âme du Maroc.",
        "btn-start": "Commencez l'aventure",
        "about-title": "Pourquoi nous choisir ?",
        "feat-1-title": "Bivouacs de luxe",
        "feat-1-desc": "Dormez sous les étoiles avec le confort d'une suite privée.",
        "feat-2-title": "Experts locaux",
        "feat-2-desc": "Nés dans le désert, nous connaissons chaque dune.",
        "feat-3-title": "Souvenirs sur mesure",
        "feat-3-desc": "Itinéraires adaptés pour les photographes et les familles.",
        "tour-title": "Circuit le plus populaire",
        "tour-name": "La Route d'Or : 3 Jours",
        "tour-desc": "Traversez le Haut Atlas, visitez Ait Ben Haddou et passez une nuit magique dans les dunes.",
        "tour-btn": "Réserver ce circuit",
        "gallery-title": "Nos Moments",
        "footer-text": "Suivez-nous pour une inspiration quotidienne."
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-about": "من نحن",
        "nav-tours": "الرحلات",
        "nav-gallery": "المعرض",
        "nav-book": "احجز الآن",
        "hero-title": "اكتشف سحر الصحراء المغربية",
        "hero-sub": "أكثر من مجرد رحلة، إنها رحلة إلى روح المغرب.",
        "btn-start": "ابدأ مغامرتك",
        "about-title": "لماذا تختارنا؟",
        "feat-1-title": "مخيمات فاخرة",
        "feat-1-desc": "نم تحت النجوم مع توفر كل سبل الراحة والرفاهية.",
        "feat-2-title": "خبراء محليون",
        "feat-2-desc": "ولدنا في الصحراء ونعرف كل الكثبان والجواهر المخفية.",
        "feat-3-title": "ذكريات خاصة",
        "feat-3-desc": "برامج مصممة خصيصاً للمصورين والعائلات.",
        "tour-title": "الرحلة الأكثر طلباً",
        "tour-name": "الطريق الذهبي: 3 أيام",
        "tour-desc": "اعبر جبال الأطلس، زر قصبة آيت بن حدو، واقضِ ليلة ساحرة في الكثبان الرملية.",
        "tour-btn": "احجز هذه الرحلة",
        "gallery-title": "لحظاتنا",
        "footer-text": "تابعنا للحصول على إلهام يومي من الصحراء."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('language-selector');
    
    langSelector.addEventListener('change', (e) => {
        const lang = e.target.value;
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    // 1. Change HTML dir attribute (for Arabic RTL)
    if (lang === 'ar') {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // 2. Update all text elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}
