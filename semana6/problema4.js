//listar 
function esPrimo(numero){
  /*  if(numero <=1) return false;
    if(numero <=3) return true;

    if(numero % 2 ===0 || numero % 3 ===0) return false;

    let i = 5;
    while (i * i <= numero){
        if(numero % i ===0 || numero % (i+2)===0) return false;
        i +=6;
    }
    return true;*/

    if (numero === 1) return "no es primo";

  let cont = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) cont++;
  }

  return cont === 2 ? "es primo" : "no es primo";
}

const numeros = [];
const primos = [];

for (let i = 1; i<=100;i++){

    console.log(i, esPrimo(i));

   /* if(esPrimo(i) ){
        console.log(`${i} es un numero primo`) ;
    }else{
        console.log(`${i} no es un numero primo`);
    }*/

   /* numeros.push(i);
    if(esPrimo(i)){
        primos.push(i);
    }*/

}

//console.log("Numeros del 1 al 100:", numeros) ;
//onsole.log("Numeros primos:", primos) ;