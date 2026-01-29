// =========================================
// SCRIPT.JS - Complete Logic
// =========================================

const translations = {
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-tours": "Tours", "nav-gallery": "Gallery", "nav-reviews": "Reviews", "nav-faq": "FAQ", "nav-book": "Book Now",
        "about-title": "Why Choose Us?",
        "feat-1-title": "Luxury Camps", "feat-1-desc": "Sleep under the stars with the comfort of a private suite.",
        "feat-2-title": "Local Experts", "feat-2-desc": "Born in the desert, we know every dune and hidden gem.",
        "feat-3-title": "Custom Memories", "feat-3-desc": "Tailor-made itineraries for photographers and families.",
        "tour-title": "Most Popular Tour", "tour-name": "The Golden Route: 3 Days", "tour-desc": "Cross the High Atlas Mountains, visit Ait Ben Haddou, and spend a magical night in the dunes.", "tour-btn": "Book This Tour",
        "gallery-title": "Our Moments",
        "reviews-title": "What Travelers Say",
        "review-1": "\"An unforgettable experience! sleeping under the stars in Merzouga was the highlight of our trip.\"",
        "review-2": "\"Very professional service. The luxury camp was cleaner than many hotels.\"",
        "review-3": "\"Authentic and magical. The camel trek at sunset was breathtaking.\"",
        "faq-title": "Frequently Asked Questions",
        "faq-q1": "What should I wear in the desert?", "faq-a1": "Comfortable clothes. Days are hot, nights are chilly.",
        "faq-q2": "Is there a bathroom in the camp?", "faq-a2": "Yes! Our luxury camps offer private ensuite bathrooms.",
        "faq-q3": "Where does the tour start?", "faq-a3": "Most tours start from your hotel in Marrakech or Fes.",
        "faq-q4": "Is the food suitable for vegetarians?", "faq-a4": "Absolutely. We cater to all dietary requirements.",
        "footer-text": "Follow us for daily inspiration from the dunes."
    },
    fr: {
        "nav-home": "Accueil", "nav-about": "À propos", "nav-tours": "Circuits", "nav-gallery": "Galerie", "nav-reviews": "Avis", "nav-faq": "FAQ", "nav-book": "Réserver",
        "about-title": "Pourquoi nous choisir ?",
        "feat-1-title": "Bivouacs de luxe", "feat-1-desc": "Dormez sous les étoiles avec le confort d'une suite privée.",
        "feat-2-title": "Experts locaux", "feat-2-desc": "Nés dans le désert, nous connaissons chaque dune.",
        "feat-3-title": "Souvenirs sur mesure", "feat-3-desc": "Itinéraires adaptés pour les photographes et les familles.",
        "tour-title": "Circuit le plus populaire", "tour-name": "La Route d'Or : 3 Jours", "tour-desc": "Traversez le Haut Atlas, visitez Ait Ben Haddou et passez une nuit magique dans les dunes.", "tour-btn": "Réserver ce circuit",
        "gallery-title": "Nos Moments",
        "reviews-title": "Avis des voyageurs",
        "review-1": "\"Une expérience inoubliable ! Dormir à la belle étoile à Merzouga a été le moment fort.\"",
        "review-2": "\"Service très professionnel. Le bivouac de luxe était plus propre que de nombreux hôtels.\"",
        "review-3": "\"Authentique et magique. La balade à dos de chameau était époustouflante.\"",
        "faq-title": "Questions Fréquentes",
        "faq-q1": "Que dois-je porter dans le désert ?", "faq-a1": "Vêtements confortables. Journées chaudes, nuits fraîches.",
        "faq-q2": "Y a-t-il une salle de bain ?", "faq-a2": "Oui ! Nos bivouacs disposent de salles de bain privées.",
        "faq-q3": "D'où part le circuit ?", "faq-a3": "De votre hôtel à Marrakech ou Fès.",
        "faq-q4": "La nourriture pour végétariens ?", "faq-a4": "Absolument. Nous nous adaptons à tous les régimes.",
        "footer-text": "Suivez-nous pour une inspiration quotidienne."
    },
    ar: {
        "nav-home": "الرئيسية", "nav-about": "من نحن", "nav-tours": "الرحلات", "nav-gallery": "المعرض", "nav-reviews": "آراء العملاء", "nav-faq": "الأسئلة", "nav-book": "احجز الآن",
        "about-title": "لماذا تختارنا؟",
        "feat-1-title": "مخيمات فاخرة", "feat-1-desc": "نم تحت النجوم مع توفر كل سبل الراحة والرفاهية.",
        "feat-2-title": "خبراء محليون", "feat-2-desc": "ولدنا في الصحراء ونعرف كل الكثبان والجواهر المخفية.",
        "feat-3-title": "ذكريات خاصة", "feat-3-desc": "برامج مصممة خصيصاً للمصورين والعائلات.",
        "tour-title": "الرحلة الأكثر طلباً", "tour-name": "الطريق الذهبي: 3 أيام", "tour-desc": "اعبر جبال الأطلس، زر قصبة آيت بن حدو، واقضِ ليلة ساحرة في الكثبان الرملية.", "tour-btn": "احجز هذه الرحلة",
        "gallery-title": "لحظاتنا",
        "reviews-title": "آراء المسافرين",
        "review-1": "\"تجربة لا تُنسى! النوم تحت النجوم في مرزوقة كان أجمل لحظة في رحلتنا.\"",
        "review-2": "\"خدمة احترافية. المخيم الفاخر كان أنظف من الفنادق.\"",
        "review-3": "\"رحلة ساحرة. ركوب الجمال وقت الغروب كان منظراً يحبس الأنفاس.\"",
        "faq-title": "الأسئلة الشائعة",
        "faq-q1": "ماذا أرتدي في الصحراء؟", "faq-a1": "ملابس مريحة. النهار حار والليالي باردة.",
        "faq-q2": "هل يوجد حمام في المخيم؟", "faq-a2": "نعم! توفر مخيماتنا حمامات خاصة داخل الخيمة.",
        "faq-q3": "من أين تبدأ الرحلة؟", "faq-a3": "من فندقك في مراكش أو فاس.",
        "faq-q4": "هل الطعام مناسب للنباتيين؟", "faq-a4": "بالتأكيد. نوفر وجبات لجميع الأنظمة الغذائية.",
        "footer-text": "تابعنا للحصول على إلهام يومي من الصحراء."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Language Logic
    const langSelector = document.getElementById('language-selector');
    langSelector.addEventListener('change', (e) => {
        const lang = e.target.value;
        if (lang === 'ar') {
            document.documentElement.setAttribute('lang', 'ar');
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', 'ltr');
        }
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) element.innerText = translations[lang][key];
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
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                 nav.classList.remove('nav-active');
            });
        });
    }

    // 3. Lightbox (Image Zoom) Logic
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.getElementsByClassName("close")[0];
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    if(closeBtn) {
        closeBtn.onclick = function() { modal.style.display = "none"; }
    }
    window.onclick = function(event) {
        if (event.target == modal) { modal.style.display = "none"; }
    }

    // 4. FAQ Accordion Logic
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
});
