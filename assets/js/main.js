
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona especificamente as divs dentro da terminal-body
    // Usamos querySelectorAll para pegar todos os blocos de texto/comandos
    const terminalContainer = document.querySelector('.terminal-body');
    if (!terminalContainer) return; // Segurança caso a classe mude

    const terminalLines = terminalContainer.querySelectorAll(':scope > div');
    
    // 2. Esconde tudo IMEDIATAMENTE
    terminalLines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
        line.style.transition = 'none'; // Remove transição para o "hide" inicial ser instantâneo
    });

    // 3. Aplica a animação com um pequeno delay para o browser processar o estado inicial
    setTimeout(() => {
        terminalLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.transition = 'all 0.4s ease-out';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 400); // 400ms de intervalo entre cada linha
        });
    }, 100); // Delay de 100ms para garantir que o "hide" funcionou

    // 4. Smooth Scroll para os IDs (Features, Arquitetura, etc)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
