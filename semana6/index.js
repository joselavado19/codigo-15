const nombre ="Jose";
const apellido ="Lavado";
const datos2=`Datos ${nombre} ${apellido}`;

console.warn("Warning consola");
console.error("Error en consola");
console.log("Template String", datos2);
console.log("residuo MOOD",40 % 5);
console.log("residuo MOOD",40 % 3);
console.log("Raiz cuadrada",Math.sqrt(100));
console.log("Potencia", Math.pow(4,2));

console.log(2 =='2');
console.log(2==='2');

console.log("Diferente", 2!='2');
console.log("Difernete", 2!=='2');

console.log(100>10);
console.log(10>100);
console.log(10>=100);
console.log(10<=100);

console.log("=====Condicionales");
let edad =15;
if(edad >=18){
    console.log("La persona es mayor de edad");
}else{
    console.log("La persona es menor de edad");
}

const numero =Number(25); //prompt("Escribe un numero");
console.log(typeof Number(numero));
if(Number(numero) % 2 ===0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

//and && 
if(numero >10 && numero < 20 && typeof numero ==="number"){
    console.log("este numero esta entre 10 y 20")
}

//or "
if(numero >10 || numero < 20 || typeof numero ==="number"){
    console.log("este numero esta entre 10 y 20")
}
//fecha
const fecha= new Date();
const hora =fecha.getHours();
if(hora <12){
    console.log("Buenos dias");
}else if(hora <18){
    console.log("Buenos tardes");
}else{
    console.log("Buenos noches");
}