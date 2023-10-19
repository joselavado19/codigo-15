const numeros= [1,3,5,7,9]
//forEach solo itera, no retorna nada
//es una funcion moderna de js
const resultado = numeros.forEach((numero)=>{
  console.log(numero)
})

console.log(resultado)

//map si retorna un array y forEach undefined osea nada

//---filter -  find
const numeros1 =[1,2,3,4,5,6,7,8,9,10]
//quiero filtrar los numeros que sean multiplos de 3
//filter retorna un array con el filtro
const numerosFiltrados = numeros1.filter((numer)=> numer % 3 === 0)

console.log(numerosFiltrados)
//

const personas = [
    {
      name: "Pedro",
      lastname: "Perez",
      age: 21,
    },
    {
      name: "Juan",
      lastname: "Zapata", //zapata
      age: 22,
    },
    {
      name: "Maria",
      lastname: "Tapia", //tapia
      age: 25,
    },
  ];
  
  //filtrar a las personas que tengan mas de 21 años
  // y el apellido tenga incluido la t
  //pero que pasa si la letra tiene Mayus
  
  const personas21 = personas.filter((persona)=> persona.age > 21 && persona.lastname.toLowerCase().includes('t') )
  console.log(personas21)

  //filter retorna array
//find retorna objetos
//busca la primera coincidencia y eso retorna
const busqueda = personas.find((persona)=> persona.age>21)
console.log(busqueda)
//
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const busqueda1 = numeros2.find((numero)=> numero >5)
console.log(busqueda1)