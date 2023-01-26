const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
  let pokemon = document.createElement('div');
  pokemon.classList.add('pokipoki');
  let numberpok = document.createElement('span');
  numberpok.innerText = i;
  let imgpok = document.createElement('img');
  imgpok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(numberpok);
  pokemon.appendChild(imgpok);

  container.appendChild(pokemon);
}
