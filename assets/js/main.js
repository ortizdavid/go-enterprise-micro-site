document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.terminal-body');
    if (!container) return;

    const elements = Array.from(container.children);
    
    // Esconder todos e preparar para animação
    elements.forEach(el => {
        el.style.display = 'none';
        el.style.opacity = '0';
    });

    let cumulativeDelay = 500;

    elements.forEach((el) => {
        // Criamos um tempo de espera que aumenta a cada linha
        setTimeout(() => {
            el.style.display = 'flex'; // Usamos flex para não quebrar os ícones ➜
            if (el.tagName === 'DIV' && !el.classList.contains('flex')) {
                el.style.display = 'block';
            }
            
            el.style.animation = 'fadeInUp 0.3s ease-out forwards';
        }, cumulativeDelay);

        // Se for um passo de build, espera mais tempo (simulação de trabalho)
        if (el.textContent.includes('[') && el.textContent.includes('/4]')) {
            cumulativeDelay += 600; 
        } else {
            cumulativeDelay += 250; 
        }
    });
});