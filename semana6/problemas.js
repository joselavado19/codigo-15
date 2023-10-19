//muestre los numeros del 1 al 100 sustituyendo
//multiplos de 3 --> "fizz", multipls de 5 --> "buzz" y si es multipl
//de ambos que diga "fizzbuzz"
let valor =0
for(let x=1;x<=100;x++){
  if( x % 3 === 0 && x % 5 ===0 ) {
   console.log("fizzbuzz")
  }else if( x % 3 === 0 ){
     console.log("fizz")
  } else if( x % 5 === 0 ){
    console.log("buzz")
  } else{
    console.log(x)
  }
  
 
}




















function validateFizzBuzz(numero){
    const m3 = numero % 3 ===0;
    const m5 = numero % 5 ===0;
    const m15 =  numero % 15 ===0;

    const respuesta = m15 ? "fizzbuzzx" : m3 ? "fizzx" :m5 ? "buzzx" : numero;
    return respuesta;
}

for(let i =1; i<=100; i++){
    console.log(validateFizzBuzz(i));
}