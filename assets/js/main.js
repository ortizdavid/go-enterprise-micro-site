document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.terminal-body');
    if (!container) return;

    // Selecionamos todos os elementos diretos que queremos animar
    const elements = container.children;
    
    // Esconder todos inicialmente
    Array.from(elements).forEach(el => {
        el.style.opacity = '0';
        el.style.display = 'none';
    });

    let delay = 500;

    Array.from(elements).forEach((el, index) => {
        setTimeout(() => {
            el.style.display = 'block';
            el.style.opacity = '1';
            el.style.animation = 'fadeInUp 0.3s ease-out forwards';
            
            // Se for uma linha de progresso [1/4], damos um delay extra para parecer que está a trabalhar
            if (el.textContent.includes('[') && el.textContent.includes('/4]')) {
                delay += 400; 
            }
        }, delay);
        
        delay += 250; // Delay padrão entre linhas
    });
});