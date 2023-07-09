
function savePlayer () {
  const jogador = document.querySelector('#jogadorName').value;
  localStorage.setItem('Player', jogador)
}

function newInterface () {
  const form = document.querySelector('form');
  const novaInterface = document.querySelector('#novaInterface');
  form.style.display = 'none';
  novaInterface.style.display = 'flex';
}

const play = document.querySelector('#playButton')

play.addEventListener('click', (eve) => {
    eve.preventDefault();
    savePlayer();
    newInterface();
  });
  