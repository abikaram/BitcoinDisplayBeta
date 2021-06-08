/*Toggle Animations*/
const pauseButton = document.getElementById('bkgd');

pauseButton.addEventListener('click', () => {
    const animation = document.getElementById('animated');
    const running = animation.style.animationPlayState || 'running';
    animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    if (pauseButton.innerHTML === 'Pause Background'){
        pauseButton.innerHTML = 'Resume Background';
        pauseButton.className = "btn btn-dark";
    }
    else {
        pauseButton.innerHTML = 'Pause Background';
        pauseButton.className = "btn btn-light";
    }
});