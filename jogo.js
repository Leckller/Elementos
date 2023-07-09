
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

function classe () {
  const ar = document.querySelector('#ar');
  const fogo = document.querySelector('#fogo');
  const agua = document.querySelector('#agua');
  const terra  = document.querySelector('#terra');
  const imagem = document.querySelector('#personagem');
  const classe = document.querySelector('#classInterface');
  if (ar.checked === true) {
    imagem.src = "/personagens/ar_puto.png"
    classe.innerHTML = 'Classe: Ar'
  } else if (fogo.checked === true) {
    imagem.src = "/personagens/fogo_puto.png"
    classe.innerHTML = 'Classe: Fogo'
  } else if (agua.checked === true) {
    imagem.src = "/personagens/agua_puto.png"
    classe.innerHTML = 'Classe: Água'
  } else if (terra.checked === true) {
    imagem.src = "/personagens/terra_puto.png"
    classe.innerHTML = 'Classe: Terra'
  }
}

const play = document.querySelector('#playButton')
play.addEventListener('click', (eve) => {
    eve.preventDefault();
    savePlayer();
    newInterface();
    classe();
  });
  