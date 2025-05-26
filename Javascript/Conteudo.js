// Função para calcular o tempo de leitura
function calculateReadingTime() {
    const content = document.querySelector('.main-content').innerText;
    const words = content.split(/\s+/).length; // Conta palavras separadas por espaços
    const wordsPerMinute = 200; // Velocidade média de leitura
    const minutes = Math.round(words / wordsPerMinute); // Arredonda para o minuto mais próximo
    return minutes === 0 ? 1 : minutes; // Garante que o tempo mínimo seja 1 minuto
}

// Atualiza o elemento de tempo de leitura
const readingTimeElement = document.querySelector('.reading-time');
if (readingTimeElement) {
    const readingTime = calculateReadingTime();
    readingTimeElement.textContent = `${readingTime} min de leitura`;
}

// Rolagem suave ao clicar nos links da sidebar
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Destacar link ativo com base na seção visível
const sections = document.querySelectorAll('.main-content h2[id]');
const navLinks = document.querySelectorAll('.sidebar a[href^="#"]');

function setActiveSidebarLink() {
    let activeId = null;
    let minDistance = Infinity;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < minDistance) {
            minDistance = rect.top;
            activeId = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
}

// Atualiza ao rolar
window.addEventListener('scroll', setActiveSidebarLink, { passive: true });
// Atualiza ao carregar
window.addEventListener('DOMContentLoaded', setActiveSidebarLink);
