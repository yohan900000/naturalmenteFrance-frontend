// Sélectionnez tous les éléments .clickable-product
const clickableProducts = document.querySelectorAll('.clickable-product');

// Ajoutez un gestionnaire d'événements à chaque élément .clickable-product
clickableProducts.forEach((clickableProduct) => {
    const modalProduct = clickableProduct.querySelector('.modal-product');
    const closeButton = modalProduct.querySelector('.top-modal span');

    clickableProduct.addEventListener('click', (event) => {
        modalProduct.classList.add('modal-open');
        event.stopPropagation(); // Empêche la propagation de l'événement pour éviter de déclencher le gestionnaire d'événements sur window
    });

    closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêche la propagation de l'événement
        modalProduct.classList.remove('modal-open');
    });
});

// Ajoutez un gestionnaire d'événements au niveau du document pour fermer le modal en dehors de .modal-product
document.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal-open');
    modals.forEach((modal) => {
        const modalContent = modal.querySelector('.modal-product');
        if (!modalContent.contains(event.target)) {
            modal.classList.remove('modal-open');
        }
    });
});
