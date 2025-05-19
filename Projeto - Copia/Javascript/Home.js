// src/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const forumLink = document.getElementById('forum-link');
    const homeLink = document.getElementById('home-link');
    const forumSidebar = document.getElementById('forum-sidebar');
    const forumContent = document.getElementById('forum-content');
    const mainContent = document.getElementById('main-content');
    const heroSection = document.getElementById('hero-section');

    forumLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Mostrar sidebar e conteúdo do fórum
        forumSidebar.classList.remove('d-none');
        forumContent.classList.remove('d-none');
        // Ajustar a largura do conteúdo principal
        mainContent.classList.remove('col-md-9');
        mainContent.classList.add('col-md-9');
        // Esconder a seção hero
        heroSection.classList.add('d-none');
    });

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Esconder sidebar e conteúdo do fórum
        forumSidebar.classList.add('d-none');
        forumContent.classList.add('d-none');
        // Ajustar a largura do conteúdo principal
        mainContent.classList.remove('col-md-9');
        mainContent.classList.add('col-md-9');
        // Mostrar a seção hero
        heroSection.classList.remove('d-none');
  });
});  