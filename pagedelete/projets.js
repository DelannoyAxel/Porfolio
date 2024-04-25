const burgerContainer = document.getElementById('burgerContainer');
const menu = document.getElementById('menu');

burgerContainer.addEventListener('click', function() {
    burgerMenu.classList.toggle('change');
    menu.classList.toggle('show');
});


projet1 = document.querySelector ('#projet1')
projet2 = document.querySelector ('#projet2')

function inversStyle (element) {
    element.style.transform = 'perspective(1200px) rotateY(10deg)';
    element.style.boxShadow = '-20px 20px 8px rgba(255, 255, 255, 0.904)';

}

function baseStyle (element) {
    element.style.transform = 'perspective(1200px) rotateY(-10deg)';
    element.style.boxShadow = '20px 20px 8px rgba(255, 255, 255, 0.904)';

}


projet1.addEventListener('mouseenter', () => {
    inversStyle(projet1)
});

projet1.addEventListener('mouseleave', () => {
    baseStyle(projet1)
});



projet2.addEventListener('mouseenter', () => {
    inversStyle(projet2)
});

projet2.addEventListener('mouseleave', () => {
    baseStyle(projet2)
});


