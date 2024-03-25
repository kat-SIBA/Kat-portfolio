document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', function() {
        const aboutContent = aboutSection.querySelector('.about-content');
        aboutContent.classList.toggle('hidden');
    });
});
