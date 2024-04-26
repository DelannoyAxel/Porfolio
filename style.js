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


// modal projets

const btnModal1 = document.querySelector('#btnModal1');
const btnModal2 = document.querySelector('#btnModal2');
const modal1 = document.querySelector('#modal1')
const modal2 = document.querySelector('#modal2')
const overlay = document.querySelector ('#overlay')
const closeButtons = document.querySelectorAll('#closeModal');


function closeModal() {

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modalId = closeButton.closest('.modal1').id;
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });
    });
}



btnModal1.addEventListener('click', () => {
modal1.style.display = 'block';
overlay.style.display = 'block';
closeModal();
});

btnModal2.addEventListener('click', () => {
    modal2.style.display = 'block';
    overlay.style.display = 'block';
    closeModal();
});

