document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.terminal-body');
    if (!container) return;

    const elements = Array.from(container.children);
    
    // Reset inicial via JS
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.visibility = 'hidden';
    });

    let cumulativeDelay = 500;

    elements.forEach((el) => {
        setTimeout(() => {
            el.style.visibility = 'visible';
            el.style.animation = 'fadeInUp 0.3s ease-out forwards';
            
            // Forçar opacidade 1 após a animação para garantir visibilidade
            el.style.opacity = '1'; 
        }, cumulativeDelay);

        // Lógica de delay inteligente
        if (el.textContent.includes('[') && el.textContent.includes('/4]')) {
            cumulativeDelay += 800; // Simula build pesado
        } else {
            cumulativeDelay += 250; 
        }
    });
});