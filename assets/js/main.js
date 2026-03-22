
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona as linhas de comando e status dentro da terminal-body
    // Usamos > div para animar cada bloco de linha individualmente
    const terminalLines = document.querySelectorAll('.terminal-body > div');
    
    // 2. Prepara o estado inicial (invisível e ligeiramente abaixo)
    terminalLines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
        line.style.transition = 'all 0.4s ease-out';
    });

    // 3. Executa a animação sequencial
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 800 + (index * 350)); // 800ms de pausa inicial + 350ms entre cada linha
    });

    // 4. Smooth Scroll para os links do menu (Features, Arquitetura, etc)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
