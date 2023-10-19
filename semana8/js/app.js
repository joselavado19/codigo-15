const form = document.querySelector("#form");
const input = document.querySelector("#input-pokemon");
const imgPokemon = document.querySelector("#pokemon-img");
const namePokemon = document.querySelector("#pokemon-name");
const pokemonAbilities = document.querySelector("#pokemon-abilities");
const stats = document.querySelector("#stats");

const myChart = new Chart(stats, {
  type: "bar",
  data: {
    labels:[],
    datasets: [
      {
        label: "Pokemon data",
        data:[],
      },
    ],
  },
});

function renderItemList(name) {
  return `<li class="flex gap-2 items-center">
    <img src="assets/icons/check.svg" width="20" alt="">${name}</li>`;
}

form.onsubmit = async function (event) {
  event.preventDefault();

  const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

  //hacer la peticion
  const response = await fetch(url);
  const data = await response.json();
  namePokemon.textContent = data.name;
  imgPokemon.src = data.sprites.other["official-artwork"].front_default;

  pokemonAbilities.innerHTML = "";

  //con forEach recorro el array
  data.abilities.forEach((item) => {
    pokemonAbilities.innerHTML += renderItemList(item.ability.name);
  });

  //con map recorremos y nos devuelve un array
  const labels = data.stats.map((item) => item.stat.name);
  const values = data.stats.map((item) => item.base_stat);
  console.log(labels);
  console.log(values);

  myChart.data.labels = labels;
  myChart.data.datasets[0].data = values;
  myChart.update();
  


};
