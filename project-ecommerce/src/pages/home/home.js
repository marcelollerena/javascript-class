import { addToCart } from "../../store/cart.store.js";
import { createNavbar } from "../../components/navbar.js";
import { getAllProducts } from "../../services/product.service.js";
import { createProductCard } from "../../components/product-card.js";

const app = document.body;
const navbar = createNavbar();

app.prepend(navbar.element);
app.appendChild(navbar.modal);

const productsContainer = document.getElementById("products-container");

const renderProducts = async () => {
  const products = await getAllProducts();

  products.forEach((product) => {
    const card = createProductCard(product);
    const btn = card.querySelector(".add-btn");

    btn.addEventListener("click", () => {
      addToCart(product);
      alert("Producto Agregado");
      navbar.update();
    });

    productsContainer.appendChild(card);
  });
};

renderProducts();
