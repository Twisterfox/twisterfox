
/* script.js */

const products = [
    {
        id: 1,
        name: "Four à pizza",
        description: "Un four à pizza de qualité professionnelle.",
        image: "https://via.placeholder.com/200",
        price: "499 €"
    },
    {
        id: 2,
        name: "Pelle à pizza",
        description: "Une pelle à pizza en bois pour une manipulation facile.",
        image: "https://via.placeholder.com/200",
        price: "25 €"
    },
    {
        id: 3,
        name: "Rouleau à pâte",
        description: "Un rouleau à pâte robuste et efficace.",
        image: "https://via.placeholder.com/200",
        price: "15 €"
    }
];

const productList = document.getElementById('product-list');
const searchBar = document.getElementById('search-bar');

function displayProducts(products) {
    productList.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button>Ajouter au panier</button>
        </div>
    `).join('');
}

displayProducts(products);

searchBar.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});
