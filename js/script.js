document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.header__navigation');
    const navList = document.querySelector('.navigation__list');
    const burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerHTML = `
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
    `;
    nav.appendChild(burger);

    burger.addEventListener('click', function () {
        navList.classList.toggle('navigation__list--active');
        if (navList.classList.contains('navigation__list--active')) {
            navList.style.display = 'flex';
            removeButtons();
        } else {
            navList.style.display = 'none';
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navList.classList.remove('navigation__list--active');
            navList.style.display = 'flex';
            restoreButtons();
        } else if (!navList.classList.contains('navigation__list--active')) {
            navList.style.display = 'none';
        }
    });

    function removeButtons() {
        const linkContainer = document.querySelector('.link__container');
        const linkContainerBlack = document.querySelector('.link__container__black');
        if (linkContainer) linkContainer.style.display = 'none';
        if (linkContainerBlack) linkContainerBlack.style.display = 'none';
    }

    function restoreButtons() {
        const linkContainer = document.querySelector('.link__container');
        const linkContainerBlack = document.querySelector('.link__container__black');
        if (linkContainer) linkContainer.style.display = 'flex';
        if (linkContainerBlack) linkContainerBlack.style.display = 'flex';
    }
});


const style = document.createElement('style');
style.innerHTML = `
    .burger {
    position: sticky;
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 30px;
        cursor: pointer;
        position: relative;
    }
    .burger__line {
        width: 100%;
        height: 3px;
        background-color: #333;
    }
    .navigation__list--active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index:3;
    }
    @media (max-width: 768px) {
        nav.header__navigation.navigation{
        justify-content: space-between;
        width: 100vw
        }
        .burger {
            display: flex;
        }
        .navigation__list {
            display: none;
        }
        .navigation__list--active {
            display: flex;
            transition: 0.3s;
        }
    }
`;
document.head.appendChild(style);

// Слайдер
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
