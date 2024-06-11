document.getElementById('startButton').addEventListener('click', () => {
    const audio = document.getElementById('backgroundMusic');
    audio.play();

    const timeline = document.getElementById('timeline');
    timeline.classList.remove('hidden');

    const events = document.querySelectorAll('.timeline-event');
    let currentEvent = 0;

    function showNextEvent() {
        if (currentEvent < events.length) {
            events[currentEvent].classList.add('active');
            currentEvent++;
            setTimeout(showNextEvent, 3000);
        }
    }

    showNextEvent();
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = '5s'; 
        confettiContainer.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 10000); 
    }, 100); 
}
