// template string //alt+96``
const numero = (num1, num2) => `la suma es: ${num1 + num2}`;

const result = numero(10, 30);
console.log(result);

//objetos
const mascota = {
  nombre: "Tom",
  edad: 5,
  vivo: true,
  //podemos adicionar array
  razas: ["angora", "persa"]
};

console.log(mascota);
console.log(mascota.edad);
console.log(mascota.razas);

//cambiar y adicionar elementos
mascota.edad = 6;
mascota.dueño = "martin";

//destructuring objects para sacar variables a forma global
const { edad, nombre } = mascota;
console.log(edad);
