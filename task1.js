document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#3498db';
        });
        
        link.addEventListener('mouseleave', function() {
            if (nav.classList.contains('scrolled')) {
                this.style.color = '#ecf0f1';
            } else {
                this.style.color = '#2c3e50';
            }
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});