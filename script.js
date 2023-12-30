document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var contentSections = document.querySelectorAll('.content-section');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#555';
        } else {
            header.style.backgroundColor = '#333';
        }
    });

    contentSections.forEach(function(section) {
        section.addEventListener('mouseenter', function() {
            section.style.backgroundColor = '#e0e0e0';
        });

        section.addEventListener('mouseleave', function() {
            section.style.backgroundColor = '';
        });
    });
});
