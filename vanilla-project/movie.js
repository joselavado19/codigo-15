const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/";
const urlMoviesByGenre= "https://moviesminidatabase.p.rapidapi.com/movie/byGen/";
const urlMovieDetail= "https://moviesminidatabase.p.rapidapi.com/movie/id/";

const options = {
    headers : {
        'X-RapidAPI-Key': '19feb1b5a4mshb9479995115e1e1p1921f0jsn4cd72c0c90b3',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'  
    },
};

async function fetchData(url){
    const response = await fetch(url,options);
    const data =  await response.json();
    return data;
}

/*function getTextGenreByURL(genre){
    return location.search.split("=")[1];
}*/

const getTextGenreByURL = () => location.search.split("=")[1];

function renderItemList(genre){
    const genreFromURL = getTextGenreByURL();
    let classToElement ="hover:text-blue-800 hover:font-semibold";

    if(genre ===genreFromURL){
        classToElement ="text-blue-800 hover:font-semibold";
    }

    return `
    <p class="my-2 ${classToElement}">
        <a href="?genre=${genre}" class="cursor-pointer">${genre}</a>
    </p>
    `;
}

export async function getGenres(element) {
    const data= await fetchData(urlGenres);
    //const response = await fetch(urlGenres,options);
    //const data = await response.json();

    data.results.forEach(item => {
        element.innerHTML += renderItemList(item.genre);
    });
  //element.innerHTML = `<h1>Hola</h1>`;
   //console.log(data.results);

}

async function renderMovie(movie){
    const data = await fetchData(`${urlMovieDetail}${movie.imdb_id}`);
    //const response = await fetch(`${urlMovieDetail}${movie.imdb_id}`, options);
    //const data = await response.json();

    const movieData = data.results;

    return `
    <div>
        <img class="w-full md:w-[200px] h-[300px] object-cover" src="${movieData.banner}" />
        <h2 class="font-semibold text-xl mt-2">${movieData.title}</h2>
        <p class ="truncate">${movieData.plot}</p>
    </div>
    `;
}


export async function getGenreByURL(){
    const genre = location.search.split("=")[1];
    //en caso si hay un  error
    if(!genre) return;
    //console.log(genre);
    //cuando no hay error hacemos la busqueda
    const data = await fetchData(`${urlMoviesByGenre}${genre}`);
    //const response = await fetch(`${urlMoviesByGenre}${genre}`,options);
    //const data = await response.json();

    const containerMovies = document.querySelector("#grid-movies");
    data.results.slice(0, 6).forEach(async (movie) => {
        const movieData = await renderMovie(movie);
        containerMovies.innerHTML += movieData;
    });
    

}
