document.addEventListener('DOMContentLoaded', () => {
    // Select all card elements
    const cards = document.querySelectorAll('.card');

    // Loop through each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle a class that scales the image
            card.classList.toggle('active');
        });
    });
});

