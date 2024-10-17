const burgerContainer = document.getElementById('burgerContainer');
const menu = document.getElementById('menu');

burgerContainer.addEventListener('click', function() {
    burgerMenu.classList.toggle('change');
    menu.classList.toggle('show');
});

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

