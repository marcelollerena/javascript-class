// # Ejercicio 1
// for (let i = 1; i <= 10; i++) {
//   console.log(`Valor de i: ${i}`);
// }

// # Ejercicio 2

// let i = 10;

// while (i > 0) {
//   console.log(`valor de i: ${i}`);

//   i = i - 1;
// }

// # Ejercicio 3

// const userNumber = prompt("Ingrese un numero: ");

// for (let i = 1; i <= 12; i++) {
//   console.log(`${userNumber} x ${i} = ${userNumber * i}`);
// }

// # Ejercicio 4

// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//   suma = suma + i;
// }

// console.log(suma);

// # Ejercicio 5

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// # Ejercicio 6

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// # Ejercicio 7

let number = 1234;
let counter = 4;

while (number > 0) {
  number = Math.floor(number / 10);
  counter++;
}

console.log(`Digits: ${counter}`);
