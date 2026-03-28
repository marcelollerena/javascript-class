import { getCart } from "../store/cart.store.js";
import { createCartModal } from "./cart-modal.js";

export const createNavbar = () => {
  const nav = document.createElement("nav");
  const modal = createCartModal(render);

  function render() {
    const cart = getCart();
    nav.innerHTML = `
    <div class="navbar">
      <h2>🏪</h2>
      <button id="cart-btn">
        <p>🛒</p> (${cart.length})
      </button>
    </div>
  `;

    nav.querySelector("#cart-btn").addEventListener("click", () => {
      modal.open();
    });
  }

  render();

  return {
    element: nav,
    update: render,
    modal: modal.element,
  };
};
