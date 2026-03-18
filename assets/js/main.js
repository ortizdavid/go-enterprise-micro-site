document.addEventListener('DOMContentLoaded', () => {
    // Seleciona as linhas do terminal para animação
    const terminalLines = document.querySelectorAll('.font-mono .text-slate-400, .font-mono .text-white');
    
    // Esconde as linhas inicialmente para o efeito
    terminalLines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';
        line.style.transition = 'all 0.5s ease-out';
    });

    // Animação sequencial (aparece uma de cada vez)
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 500 + (index * 400)); 
    });

    // Smooth scroll para navegação interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});