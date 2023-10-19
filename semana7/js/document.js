//vamos a cambiar el color del body
//paso 1 como podemos obterne un elemento desde js

//forma antigua
const cuerpoDeLaWeb = document.getElementsByTagName("body");
console.log(cuerpoDeLaWeb[0]);

//forma moderna -- trae al primero q encuentre ssolo 1
const cuerpoDeLaWeb2 = document.querySelector("body");
console.log("Con querySelector",cuerpoDeLaWeb2);
//no se utiliza guion medio en la propiedad css y se referenia con style
cuerpoDeLaWeb2.style.backgroundColor = "#eee";
cuerpoDeLaWeb2.style.fontSize ="40px";

const secondaryTitles = document.getElementsByTagName("h2");
//console.log(secondaryTitles );
for(const item of secondaryTitles ){
    console.log(item );
}
console.log("--------");

const secondaryTitles2 = document.querySelectorAll("h2");
secondaryTitles2.forEach((item)=>{
    console.log(item);
})

//obtener elemento por ID
//antigua
const title = document.getElementById("title");
//moderna
const title2 = document.querySelector("#title");

//obtener elemento por class
const imageAvengers = document.getElementsByClassName("img-avengers");
console.log(imageAvengers);
//moderna
const imageAvengers2 = document.querySelector(".img-avengers");
console.log("query",imageAvengers2);

//evento clic
const buttonWeb = document.querySelector("#btn-change-web");

buttonWeb.onclick = function (){
    imageAvengers2.src ="https://elcomercio.pe/resizer/ngVEFAIR6Ca5Kv9jUKiftX45yTk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/COJ4IURFMZFXTDFSF4FUIB4FFE.jpg";
    imageAvengers2.style.cssText =`
    width : 200px; 
    `
    
    title2.textContent="UN Ferrari en Garage";
}


