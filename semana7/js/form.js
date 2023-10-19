const form = document.querySelector("#form-register");
//buscamos el boton
const button = document.querySelector("button");
/*const input = document.querySelector("input");
input.onkeyup = function(event){
 console.log("input", event);
}*/

function setValidatetoBotton(validate) {
  if (validate) {
    button.classList.remove("bg-purple-800/50", "cursor-no-drop");
    button.classList.add("bg-purple-800", "cursor-pointer");
    button.removeAttribute("disabled");
  } else {
    button.classList.remove("bg-purple-800", "cursor-pointer");
    button.classList.add("bg-purple-800/50", "cursor-no-drop");
    button.setAttribute("disabled", true);
  }
}

function verifyIfAllInputsAreNotEmpty() {
  //traer todos los inputs
  const inputs = document.querySelectorAll("input"); //retorna un notlist osea no es array

  //opcion 1 de programacion
  /* const inputValues={};

  for(const input of inputs){
    inputValues[input.name] = input.value;
  }
//Object.values(inputValues) -->estp convierte el objeto enun array
  const validate=Object.values(inputValues).filter((value)=> value).length ===4;*/

  //opcion2 de programacion
  const validate =
    Array.from(inputs)
      .map((input) => input.value)
      .filter((value) => value).length === 4;
  setValidatetoBotton(validate);
}

function verifyIfEmptyInput(element) {
  verifyIfAllInputsAreNotEmpty();
  //console.log(element.dataset.validation);
  //console.log(element.dataset.prueba);
  //console.log("event", element.value);
  const ifAfterInput = document.querySelector(`#${element.name}`);

  // console.log(miboton);

  if (element.value.length > 0) {
    element.classList.remove("border", "border-red-500");
    //if(ifAfterInput) ifAfterInput.remove();
    ifAfterInput?.remove();

    //element.classList.remove("disabled")
  } else {
    if (element.dataset.validation === "false") return;
    //if (element.dataset.validation !== "false") {
    element.classList.add("border", "border-red-500");

    //valida para q no duplique p
    if (!ifAfterInput) {
      //agregar un <p></p> despues del input
      const p = document.createElement("p"); //se esta creando un p vacio
      p.textContent = "Completa este campo";
      p.setAttribute("id", element.name); //p id=nombre
      p.classList.add("mt-3", "text-xs", "text-red-500");
      element.after(p);
    }
    // }
  }
}

/*
los formularios tienes un evento especial  y unico
onSubmit y tiene un paramentro llamado event
*/

form.onsubmit = function (event) {
  //existe una funcion que nos permite evitar que el navegador
  //se recargue cuando es un formulario
  event.preventDefault(); //con esto el form ya no se recarga
  //console.log("Esto funciona");
  const inputs = document.querySelectorAll("input");
  const values = {}; //declaro objeto vacio


  for (const input of inputs) {
    values[input.name] = input.value;
    //if (input.value === "") {
    //   if (!input.value) { //osea cuando no tenga un valor
    //  input.classList.add("border", "border-red-500");
    // }
    // console.log(input.name,input.value);
    verifyIfEmptyInput(input);
  }


  
  if (values.clave !== values["reclave"]) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El password no coincide",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Exitoso!",
    text: "El password si coincide",
  });
  //vamos a guarda los valores del objeto en un array y verificar
  //si alguno esta vacio
  const inputValues = Object.values(values);
  const validacion = inputValues.find((value) => !value);
  console.log(typeof validacion);

  if (typeof validacion === "string") {
    alert("complete los campos");
    return;
  }

  //console.log(Object.values(values));
  //console.log(event.target[0].value);
};
