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
  
  //filter retorna array
  //find retorna objetos
  //busca la primera coincidencia y eso retorna
  const busqueda = personas.find((persona)=> persona.age>21)
  console.log(busqueda)
  //
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const busqueda1 = numeros.find((numero)=> numero >5)
  console.log(busqueda1)
  
  // find index -- clse viernes 08-09-2023
  //retorna un numero 
  const  nombres=["Pepe","Juan","Maria","Mercedes","Juan"]
  const busqueda2 = nombres.findIndex((nombre)=>nombre ==="Maria")
  console.log(busqueda2)
  //
  //every
  //some
  //retornan booleanos
  const numerosv=[2,5,7,9,1]
  const todoEsPar = numerosv.every((numero)=>numero %2 ===0)
  console.log("resultado con every",todoEsPar)
  const respuestaP = numerosv.some((numero)=>numero %2 ===0)
  console.log("resultado con some",respuestaP)