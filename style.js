const burgerContainer = document.getElementById('burgerContainer');
const menu = document.getElementById('menu');

burgerContainer.addEventListener('click', function() {
    burgerMenu.classList.toggle('change');
    menu.classList.toggle('show');
});


// Fonction pour afficher le texte lettre par lettre
function showText(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Fonction pour supprimer le texte lettre par lettre
function hideText(element, speed) {
    const text = element.textContent;
    let i = text.length - 1;
    const interval = setInterval(() => {
        if (i >= 0) {
            element.textContent = text.substring(0, i);
            i--;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

const textElement = document.querySelector('.wrap'); // 
const texts = ["world.", "visiteur !", "recruteur ?"]; // Textes à afficher en alternance
let index = 0; // Index pour parcourir les textes
const speed = 200; // Vitesse d'animation 

// Fonction pour alterner entre les textes
function alternateText() {
    showText(textElement, texts[index], speed);
    setTimeout(() => {
        hideText(textElement, speed);
        index = (index + 1) % texts.length; // Passer au texte suivant
        setTimeout(() => {
            alternateText(); // Commencer à afficher le prochain texte après un délai
        }, 3000); // Délai de 2 secondes avant de commencer à afficher le texte suivant
    }, speed * texts[index].length + 1000); // Attendre que le texte soit affiché entièrement avant de le cacher
}


alternateText();

