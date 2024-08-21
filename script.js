document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card img");
    const body = document.querySelector("body");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const overlay = document.createElement("div");
            overlay.className = "overlay active";
            body.appendChild(overlay);
            
            this.classList.toggle("expanded");

            overlay.addEventListener("click", function() {
                card.classList.remove("expanded");
                body.removeChild(overlay);
            });
        });
    });
});

