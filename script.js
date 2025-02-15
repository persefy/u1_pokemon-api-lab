//console.log('working!');

let button = document.querySelector("#searchButton");
let pokemonName = document.querySelector("#pokemonName");
let pokemonImage = document.querySelector("#pokemonImage");

button.addEventListener('click', async () => {
    let textInput = document.querySelector("#inputBar").value;
    //console.log(textInput);
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
    let pokePic = response.data.sprites.other.home.front_default;
    console.log(pokePic);
    
    //Output
    pokemonName.innerHTML = `${textInput}`;
    pokemonImage.setAttribute('src', `${pokePic}`);
});