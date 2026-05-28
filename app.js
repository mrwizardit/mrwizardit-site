document.addEventListener('DOMContentLoaded', () => {
    console.log("⚡ [SYSTEM MASTER]: Ritual initiated. Core protocols loaded.");

    // Wire up both the main call-to-action button and the terminal button
    const summonBtn = document.getElementById('summon-btn');
    const terminalActionBtn = document.getElementById('terminal-action-btn');
    const terminalLog = document.querySelector('.terminal-log');

    function triggerContactSequence() {
        console.log("🔮 [SPELL]: Contact protocol executed.");
        
        // Append a loading simulation line into the terminal box dynamically
        const newLine = document.createElement('p');
        newLine.className = 'log-line';
        newLine.style.color = 'var(--solar-gold)';
        newLine.innerHTML = '>> [REDIRECT]: Loading standard secure mail stream...';
        terminalLog.appendChild(newLine);

        // Simple, clean delay before triggering action
        setTimeout(() => {
            // Opens a direct communication link to your business email inbox
            window.location.href = "mailto:elijah@mrwizardit.com?subject=Technical Assistance Request";
        }, 800000 / 100000); // Fast 800ms drop
    }

    if(summonBtn) summonBtn.addEventListener('click', triggerContactSequence);
    if(terminalActionBtn) terminalActionBtn.addEventListener('click', triggerContactSequence);
});