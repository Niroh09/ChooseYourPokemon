const pokemonThumb = document.querySelector('.thumb').querySelectorAll('img');
const pokemon = document.querySelector('.pokemon');
const circle = document.querySelector('.circle');
const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation')


//Background Colors
const bulbasaurColor = '#017143';
const charmanderColor = '#fa6b05';
const squirtleColor = '#1b6ef5';

//Change pokemon and circle background
pokemonThumb.forEach(img => {
  img.addEventListener('click', (e) => {
    if(e.target.alt == 'bulbasaur'){
      pokemon.src = './images/bulbasaur.png'
      circle.style.background = bulbasaurColor;
    }else if(e.target.alt == 'charmander'){
      pokemon.src = './images/charmander.png'
      circle.style.background = charmanderColor;
    }else{
      pokemon.src = './images/squirtle.png'
      circle.style.background = squirtleColor;
    }
  })
});

//Toggle responsive menu
menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active')
navigation.classList.toggle('active')
})