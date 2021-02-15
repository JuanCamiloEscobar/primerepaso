// template string //alt+96``
/*const numero = (num1, num2) => `la suma es: ${num1 + num2}`;

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

//objetos dentro de objetos y mas objetos
const Web = {
  nombre: "headshop",
  links: {
    enlace: "www.helmetshop.com"
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/headshop",
      nombre: "helmet yt"
    }
  }
};
//ver un objeto que esta dentro de otros
const { enlace } = Web.redesSociales.youtube;

console.log(enlace);
console.log(Web.redesSociales.youtube.nombre);
*/
//fetch

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));

// async await
const obtenerPoke = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    //console.log(data.results);
    //map() y filter()
    const arrayNombres = data.results.map((poke) => poke.url);
    const arrayNombre = data.results.filter((poke) => poke.name !== "perro");
    console.log(arrayNombres);
    console.log(arrayNombre);
  } catch (error) {
    console.log(error);
  }
};
obtenerPoke();
