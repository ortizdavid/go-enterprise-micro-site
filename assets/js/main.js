// main.js
console.log("Script carregado com sucesso!");

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona as linhas diretas dentro da terminal-body
    const container = document.querySelector('.terminal-body');
    
    if (!container) {
        console.error("Erro: Classe .terminal-body não encontrada no HTML!");
        return;
    }

    const lines = container.querySelectorAll(':scope > div');
    console.log("Linhas encontradas para animar:", lines.length);

    // Estado inicial: Esconder tudo
    lines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
        line.style.transition = 'none'; 
    });

    // Pequeno delay para garantir que o browser aplicou o 'opacity 0'
    setTimeout(() => {
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.transition = 'all 0.4s ease-out';
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 300); // Velocidade da animação (300ms entre linhas)
        });
    }, 100);
});