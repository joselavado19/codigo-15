//const containerBill = document.querySelector("#container-bill");
//const inputBill = document.querySelector("#input-bill");
const containerinputbill = document.querySelector("#container-input-bill");
const containerPercentage = document.querySelector("#container-percentage");
const containerinputpeople = document.querySelector("#container-input-people");
//containerBill.onclick = () => inputBill.focus();
let valuePercentage = 0;
let currentSelect = null;

function setFocusInput(element) {
  //console.log(element); //children convierte en un array los elementos
  element.children[1].focus();
  
}


function setButtonSelect(element) {
  const spanValue = element.children[0].textContent;
  const spanCurrentValue = currentSelect?.children[0].textContent;
  const inputCustom = document.querySelector("input[name='custom']");

  if(inputCustom?.value) inputCustom.value ="";

  if (currentSelect) {
    currentSelect.classList.remove("bg-green-200");
    currentSelect.classList.add("bg-[#00494d]");
  }

  if (spanValue === spanCurrentValue) {
    currentSelect.classList.remove("bg-green-200");
    currentSelect.classList.add("bg-[#00494d]");
    currentSelect = null;
    valuePercentage =0;
  } else {
    element.classList.remove("bg-[#00494d]");
    element.classList.add("bg-green-200");
    currentSelect = element;
    valuePercentage = Number(spanValue.replace("%",""));
  }


}

function renderItemPercentage(value) {
  return `<div 
        onclick="setButtonSelect(this)"
        class="bg-[#00494d] cursor-pointer text-white font-semibold text-xl rounded-md p-3 text-center">
    <span>${value}</span>
</div>`;
}

function renderInput(icon, placeholder, name) {
  return `<div
            class="flex items-center p-3 rounded-md bg-green-100/50 cursor-text"
            onclick="setFocusInput(this)"
          >
            <img src="${icon}" alt="" />
            <input
              type="text"
              name="${name}"
              placeholder="${placeholder}"
              class="w-full text-right outline-none bg-transparent text-green-900 text-xl font-semibold"
            />
          </div>`;
}

function generatePercentageList() {
  const percentages = ["5%", "10%", "15%", "25%", "50%"];

  percentages.forEach((percentage) => {
    containerPercentage.innerHTML += renderItemPercentage(percentage);
  });
  containerPercentage.innerHTML += renderInput(null, "Custom", "custom");
}

generatePercentageList();

containerinputbill.innerHTML = renderInput(
  "./assets/icon-dollar.svg",
  "0.0",
  "input-bill"
);
containerinputpeople.innerHTML = renderInput(
  "./assets/icon-person.avg",
  "0",
  "input-people"
);

const inputCustom = document.querySelector("input[name='custom']");
//console.log("asas",inputCustom);
inputCustom.onkeyup = function(event){
    valuePercentage = Number(event.target.value);
    if(currentSelect){
        currentSelect.classList.remove("bg-green-200");
        currentSelect.classList.add("bg-[#00494d]");
        currentSelect = null;
    }
    //console.log(event);
}
