document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.terminal-body');
    if (!container) return;

    const logs = [
        { type: 'cmd', text: 'make docker-up setup-dev' },
        { type: 'info', text: '# Carregando configurações via Viper (config.yaml)...' },
        { type: 'success', text: '⚙️  Injeção de variáveis de ambiente... DONE' },
        { type: 'info', text: '# Orquestrando Infraestrutura...' },
        { type: 'wait', text: '📦 Container enterprise_db      | health: checking...' },
        { type: 'success', text: '📦 Container enterprise_db      | <span class="text-green-400">healthy</span>', delay: 800 },
        { type: 'success', text: '📦 Container enterprise_redis   | <span class="text-green-400">healthy</span>' },
        { type: 'success', text: '📦 Container enterprise_minio   | <span class="text-green-400">healthy</span>' },
        { type: 'info', text: '# Sincronizando Esquema (Atlas) & Seeds...' },
        { type: 'success', text: '🚀 Migrations applied to <span class="text-yellow-500">core.files</span>... <span class="text-green-400 font-bold">DONE</span>' },
        { type: 'success', text: '🌱 Go seeds (RBAC & Flags) injected... <span class="text-green-400 font-bold">DONE</span>' },
        { type: 'cmd', text: 'make docker-release', mt: 8 },
        { type: 'info', text: '# Full Cycle: Build Multi-stage -> Registry' },
        { type: 'step', text: '[1/4] Building Docker (Go 1.25)... <span class="text-blue-400">OK</span>' },
        { type: 'step', text: '[2/4] Running Tests & Lint... <span class="text-blue-400">OK</span>', delay: 1000 },
        { type: 'step', text: '[3/4] Running Migrations... <span class="text-blue-400">OK</span>' },
        { type: 'step', text: '[4/4] Pushing to Registry... <span class="text-green-400 font-bold">SUCCESS</span>' },
        { type: 'final', text: `
            <div class="mt-8 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg">
                <div class="flex items-center gap-3">
                    <span class="flex h-3 w-3 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </span>
                    <span class="text-white font-bold uppercase text-[10px] tracking-widest">System Live & Optimized</span>
                </div>
                <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] font-mono">
                    <div class="text-slate-500 uppercase">Swagger: <span class="text-cyan-400">:3000/docs</span></div>
                    <div class="text-slate-500 uppercase">Metrics: <span class="text-cyan-400">:3000/metrics</span></div>
                    <div class="text-slate-500 uppercase">MinIO: <span class="text-cyan-400">:9001</span></div>
                    <div class="text-slate-500 uppercase">Rabbit: <span class="text-cyan-400">:15672</span></div>
                </div>
            </div>
            <div class="mt-4 text-cyan-400 font-bold">➜ <span class="cursor-blink"></span></div>
        `}
    ];

    let cumulativeDelay = 500;

    logs.forEach((log) => {
        setTimeout(() => {
            const el = document.createElement('div');
            
            if (log.type === 'cmd') {
                el.className = `flex gap-4 ${log.mt ? 'mt-8' : ''}`;
                el.innerHTML = `<span class="text-cyan-400">➜</span><span class="text-white font-bold">${log.text}</span>`;
            } else if (log.type === 'info') {
                el.className = 'mt-2 text-slate-500 italic text-xs';
                el.textContent = log.text;
            } else if (log.type === 'final') {
                el.innerHTML = log.text;
            } else {
                el.className = 'text-slate-400 text-xs sm:text-sm';
                el.innerHTML = log.text;
            }

            el.style.opacity = '0';
            el.style.animation = 'fadeInUp 0.3s ease-out forwards';
            container.appendChild(el);
            
            // Faz scroll automático se o conteúdo crescer muito
            container.scrollTop = container.scrollHeight;

        }, cumulativeDelay);

        cumulativeDelay += log.delay || 250;
    });
});