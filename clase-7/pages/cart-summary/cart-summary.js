const cartSummaryContainer = document.getElementById("cart-summary-container");
const cartSummaryTotal = document.getElementById("cart-summary-total");

const getCartItems = localStorage.getItem("user-cart");
let cart = getCartItems ? JSON.parse(getCartItems) : [];

function displayCartSummary() {
  if (cart.lenght === 0) {
    cartSummaryContainer.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cartSummaryContainer.innerHTML = cart
    .map(
      (product) => `
    <div class="md-product-card">
      <img src="${product.image}" alt="${product.description}" width="200px"/>
      <h3>${product.name}</h3>
      <span>${product.quantity}</span>
      <span>$${product.price * product.quantity}</span>
    </div>    
    `,
    )
    .join("");
}

function displayCartTotal() {
  const total = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  cartSummaryTotal.innerHTML = `
    <h4>Total: $${total}</h4>
  `;
}

displayCartSummary();
displayCartTotal();
