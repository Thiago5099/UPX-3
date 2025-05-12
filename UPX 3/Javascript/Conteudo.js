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
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Destacar link ativo com base na seção visível
const sections = document.querySelectorAll('.main-content h2');
const navLinks = document.querySelectorAll('.sidebar a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
    