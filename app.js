document.addEventListener('DOMContentLoaded', () => {
    console.log("⚡ [SYSTEM MASTER]: Ritual initiated. Core protocols loaded.");

    const summonBtn = document.getElementById('summon-btn');
    const terminalActionBtn = document.getElementById('terminal-action-btn');
    const terminalLog = document.querySelector('.terminal-log');

    function triggerContactSequence() {
        console.log("🔮 [SPELL]: Contact protocol executed.");
        
        const newLine = document.createElement('p');
        newLine.className = 'log-line';
        newLine.style.color = 'var(--solar-gold)';
        newLine.innerHTML = '>> [REDIRECT]: Loading standard secure mail stream...';
        terminalLog.appendChild(newLine);

        setTimeout(() => {
            window.location.href = "mailto:elijah@mrwizardit.com?subject=Technical Assistance Request";
        }, 800); /* Fixed timeout logic to exactly 800 milliseconds */
    }

    if(summonBtn) summonBtn.addEventListener('click', triggerContactSequence);
    if(terminalActionBtn) terminalActionBtn.addEventListener('click', triggerContactSequence);
});