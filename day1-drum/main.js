window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    const audioEl = document.querySelector(`audio[data-key="${keyCode}"`);
    const pianoEl = document.querySelector(`li[data-key="${keyCode}"`);
    audioEl.play();
    pianoEl.classList.add('playing');
});

const pianoElList = document.querySelectorAll('li');

pianoElList.forEach(el => {
    console.log(el);
    el.addEventListener('transitionend', function(e) {
        if (e.propertyName === 'transform') {
            this.classList.remove('playing');
        }
    });
})
