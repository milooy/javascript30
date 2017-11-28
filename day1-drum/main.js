window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    const audioEl = document.querySelector(`audio[data-key="${keyCode}"`);
    const pianoEl = document.querySelector(`li[data-key="${keyCode}"`);
    if(!audioEl) return;
    audioEl.currentTime = 0;
    audioEl.play();
    pianoEl.classList.add('playing');
});

const pianoElList = document.querySelectorAll('li');
pianoElList.forEach(el => {
    el.addEventListener('transitionend', function(e) {
        if (e.propertyName === 'transform') {
            this.classList.remove('playing');
        }
    });
});
