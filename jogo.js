
function savePlayer () {
  const jogador = document.querySelector('#jogadorName').value;
  localStorage.setItem('Player', jogador)
}

function newInterface () {
  const form = document.querySelector('form');
  const novaInterface = document.querySelector('#novaInterface');
  const msgBemvindo = document.querySelector('#msgBemVindo');
  const aside = document.querySelector('#aside');
  const nomeArmazenado = localStorage.getItem("Player");
  aside.style.display = 'flex';
  form.style.display = 'none';
  novaInterface.style.display = 'flex';
  msgBemvindo.innerHTML = `Bem Vindo ${nomeArmazenado}`

}

const play = document.querySelector('#playButton')

play.addEventListener('click', (eve) => {
    eve.preventDefault();
    savePlayer();
    newInterface();
  });
  