export const createProductCard = (product) => {
  const card = document.createElement("div");

  card.className = "product-card";

  card.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" alt="${product.description}"/>
    <p>${product.price}</p>
    <button class="add-btn">Agregar al carrito</button> 
  `;

  return card;
};
