// BUY CAR
function buyCar(model) {
    alert("You selected: " + model + "\nWe will contact you shortly!");
}

// SEARCH + FILTER
const searchInput = document.getElementById("searchInput");
const filterBrand = document.getElementById("filterBrand");
const carCards = document.querySelectorAll(".car-card");

if (searchInput && filterBrand) {
    const filterCars = () => {
        const text = searchInput.value.toLowerCase();
        const brand = filterBrand.value;

        carCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const carBrand = card.dataset.brand;

            card.style.display =
                title.includes(text) && (brand === "" || brand === carBrand)
                    ? "block"
                    : "none";
        });
    };

    searchInput.addEventListener("keyup", filterCars);
    filterBrand.addEventListener("change", filterCars);
}
