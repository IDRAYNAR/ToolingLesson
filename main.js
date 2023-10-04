import './style.css';

let pokemonCount = 15;
const maxPokemon = 150;

function loadPokemon(count) {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#app').innerHTML = '';
      data.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonData) => {
            const pokemonType = pokemonData.types[0].type.name;
            document.querySelector('#app').innerHTML += `
              <div class="pokemon-card ${pokemonType}">
                <h1 class="pokemon-name">${pokemonData.name}</h1>
                <p class="pokemon-id">ID: ${pokemonData.id}</p>
                <hr>
                <div class="sprite-container"><img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="pokemon-sprite"/></div>
                <p class="pokemon-type">Type: ${pokemonType}</p>
                <hr>
                <div class="pokemon-stats">
                  <p class="pokemon-hp">HP <br><b>${pokemonData.stats.find((stat) => stat.stat.name === 'hp').base_stat}</b></p>
                  <p class="pokemon-attack">ATK <br><b>${pokemonData.stats.find((stat) => stat.stat.name === 'attack').base_stat}</b></p>
                  <p class="pokemon-defense">DEF <br><b>${pokemonData.stats.find((stat) => stat.stat.name === 'defense').base_stat}</b></p>
                  <p class="pokemon-speed">SPD <br><b>${pokemonData.stats.find((stat) => stat.stat.name === 'speed').base_stat}</b></p>
                </div>
              </div>
            `;
          });
      });
    });
}

loadPokemon(pokemonCount);

document.querySelector('#more').addEventListener('click', () => {
  if (pokemonCount < maxPokemon) {
    pokemonCount += 15;
    loadPokemon(pokemonCount);
  }
  if (pokemonCount >= maxPokemon) {
    document.querySelector('#more').style.display = 'none';
  }
  if (pokemonCount > 15) {
    document.querySelector('#less').style.display = 'block';
  }
});

document.querySelector('#less').addEventListener('click', () => {
  if (pokemonCount > 15) {
    pokemonCount -= 15;
    loadPokemon(pokemonCount);
  }
  if (pokemonCount <= 15) {
    document.querySelector('#less').style.display = 'none';
  }
  if (pokemonCount < maxPokemon) {
    document.querySelector('#more').style.display = 'block';
  }
});
