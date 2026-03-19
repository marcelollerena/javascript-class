const products = [
  {
    id: 1,
    name: "Camiseta",
    type: "parte superior",
    price: 1200,
    description: "Camiseta de vestir...",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Pantalón",
    type: "parte inferior",
    price: 2500,
    description: "Pantalón casual de tela cómoda y resistente.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 3,
    name: "Chaqueta",
    type: "abrigo",
    price: 4800,
    description: "Chaqueta ligera ideal para climas frescos.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 4,
    name: "Sudadera",
    type: "abrigo",
    price: 3000,
    description: "Sudadera abrigadora con capucha.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 5,
    name: "Camisa",
    type: "parte superior",
    price: 2200,
    description: "Camisa formal de algodón.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 6,
    name: "Short",
    type: "parte inferior",
    price: 1800,
    description: "Short cómodo para uso diario.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 7,
    name: "Falda",
    type: "parte inferior",
    price: 2100,
    description: "Falda elegante de tela suave.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 8,
    name: "Blusa",
    type: "parte superior",
    price: 2000,
    description: "Blusa ligera ideal para verano.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 9,
    name: "Abrigo",
    type: "abrigo",
    price: 5500,
    description: "Abrigo grueso para clima frío.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 10,
    name: "Jeans",
    type: "parte inferior",
    price: 3200,
    description: "Jeans clásicos de corte moderno.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 11,
    name: "Chaleco",
    type: "abrigo",
    price: 2700,
    description: "Chaleco casual perfecto para combinar.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];

let cart = [];

const productsContainer = document.getElementById("products-container");
const cartModal = document.getElementById("cart-modal");
const cartButton = document.getElementById("cart");

cartButton.addEventListener("click", () => {
  cartModal.style.display === "block"
    ? (cartModal.style.display = "none")
    : (cartModal.style.display = "block");
});

function displayProducts() {
  productsContainer.innerHTML = products
    .map(
      (product) => `
      <div class="product-card" onclick="addToCart(${product.id})">
        <img src="${product.image}" alt="${product.description}"/>
        <h3>${product.name}</h3>
        <div class="product-card-bottom">
        <span>${product.type}</span>
        <span>$${product.price}</span>
        </div>
      </div>
    `,
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  cart.push(product);
}

displayProducts();
