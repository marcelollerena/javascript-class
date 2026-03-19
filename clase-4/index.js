/* 
 Requerimientos:
 [x] Mostrar Menu
 [x] Mostrar productos
 [x] Añadir al carrito
 [] Mostrar carrito
 [] Eliminar del carrito
 [] Limpiar todo el carrito
 [] Comprar

*/

const productos = [
  { id: 1, name: "Laptop", price: 2300 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 100 },
  { id: 4, name: "Monitor", price: 2700 },
];

let cart = [];

function showProducts() {
  console.log("---- Productos Disponibles ----");
  productos.forEach((product) =>
    console.log(`${product.id} - ${product.name} - ${product.price}`),
  );
}

function addToCart() {
  const productId = Number(prompt("Ingresa el ID del producto"));

  const product = productos.find((product) => product.id === productId);

  if (!product) {
    console.log("--- Producto no encontrado ---");
    return;
  }

  cart = [...cart, product];

  console.log(`${product.name} ha sido agregado al carrito`);
}

function showCart() {
  console.log("---- Tu carrito ----");

  if (cart.length === 0) {
    console.log("---- Tu carrito esta vacio ----");
    return;
  }

  let total = 0;

  cart.forEach((product) => {
    console.log(`${product.id} - ${product.name} - ${product.price}`);

    total = total + product.price;
  });

  console.log("Total: ", total);
}

function removeFromCart() {
  console.log("Eliminar del Carrito");
}

function checkout() {
  console.log("Checkout");
}

function startStore() {
  let running = true;

  while (running) {
    const option = prompt(`
      1 - Ver Productos
      2 - Agregar Producto
      3 - Ver Carrito
      4 - Eliminar el producto
      5 - Comprar
      6 - Salir del programa
      `);

    switch (option) {
      case "1":
        showProducts();
        break;
      case "2":
        addToCart();
        break;
      case "3":
        showCart();
        break;
      case "4":
        removeFromCart();
        break;
      case "5":
        checkout();
        break;
      case "6":
        running = false;
        console.log("Gracias por comprar en Codigo Store");
        break;
      default:
        console.log("Opcion Invalida");
    }
  }
}
