const buttonLeft = document.getElementById('buttonLeft');
const buttonRight = document.getElementById('buttonRight');

buttonLeft.addEventListener('click', () => swapCards('left'));
buttonRight.addEventListener('click', () => swapCards('right'));

function swapCards(direction) {
    const parent = document.querySelector('.reviews__cards');
    const cards = Array.from(parent.children);

    if (direction === 'left') {
        parent.insertBefore(cards[1], cards[0]);
        buttonLeft.disabled = true;
        buttonRight.disabled = false;
        buttonLeft.style.opacity = '0.5';
        buttonRight.style.opacity = '1';
    } else if (direction === 'right') {
        parent.appendChild(cards[0]);
        buttonRight.disabled = true;
        buttonLeft.disabled = false;
        buttonRight.style.opacity = '0.5';
        buttonLeft.style.opacity = '1';
    }
}

buttonLeft.disabled = true;
buttonRight.disabled = false;
buttonLeft.style.opacity = '0.5';
buttonRight.style.opacity = '1';
