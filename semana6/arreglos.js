//Personas.shift();
//console.log("personas shift", personas);

//for
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const producto = 5;
const resultado = [];
const resultado2 = [];
for (let i = 0; i < numeros.length; i++) {
  const operacion = numeros[i] * producto;
  resultado.push(operacion);
}

console.log("Calculadora", resultado);

for (const numero of numeros) {
  resultado2.push(numero * producto);
}
console.log("For of:", resultado2);
//

const numero2 = [2, 5, 20, 21, -5];
let mayor = numero2[0];

for (const numeros of numero2) {
  numeros > mayor ? (mayor = numeros) : "";
}
console.log(mayor);
//
const numero3 = [1, 2, 13, 23, 24, 89, 104];
let sumapar = 0;
let sumaimpar = 0;
for (const n of numero3) {
  n % 2 === 0 ? (sumapar += n) : (sumaimpar += n);
}
console.log(sumapar, sumaimpar);

//contar cantidad de vocales en una palabra
const vocales = ["a", "e", "i", "o", "u"];
const palabra = "monitor";
let cantidadvocales = 0;

for (const letra of palabra) {
  for (const vocal of vocales) {
    letra === vocal ? cantidadvocales++ : "";
  }
}
console.log("vocales", cantidadvocales);
console.log(palabra.length - cantidadvocales);

//map
const numeros5 = [1, 2, 3, 4, 5];
const resultado5 = numeros5.map(function (numerito) {
  return numerito * 5;
});
console.log(resultado5);

//
const personas = [
  {
    name: "Pedro",
    lastname: "Perez",
    age: 21,
  },
  {
    name: "Juan",
    lastname: "Zapata",
    age: 22,
  },
  {
    name: "Maria",
    lastname: "Gonzales",
    age: 25,
  },
];
const nombrespersonas = personas.map((persona) => persona.name);
const agepersonas = personas.map((persona) => persona.age);
const agepersonas2 = personas.map((persona) => persona.age * 10);
console.log(nombrespersonas);
console.log(agepersonas2);

//funcion flecha
function calcular(n1, n2) {
  return n1 + n2;
}

const calcular2 = (n1, n2) => {
  return n1 + n2;
};

console.log(calcular2(5, 6));

//si solo tenemos una sola linea dentro de la funcion  esta puede abreviarse
const calcular3 = (n1, n2) => n1 + n2;
console.log(calcular3(7, 8));

//crea una funcion que reciba un numero e indique si es par , esta retorna tru o false
//nivel 1
const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// nivel 2
const esPar2 = (num) => (num % 2 === 0 ? true : false);
//ternarios y nullish coelscing operator
const nombre = undefined;
const edad = 18;
console.log(nombre ?? "Nombre no encontrado");
console.log(nombre ? nombre : "Nombre no encontrado");
console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad");
//
