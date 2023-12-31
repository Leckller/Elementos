
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

function verifyNick () {
  const nick = document.querySelector('#jogadorName');
  try {
    if (nick.value.length < 3) {
        const erro = document.querySelector('#error');
        throw new Error('Insira um nick válido');
      }
  } catch (error) {
    alert(error.message);
    location.reload()
  }
}

function interfaceDeJogo () {
  const localGame = document.querySelector('#blocoGame');
  const Ataque = document.createElement('button');
  const BuffElementar = document.createElement('button');
  const verifyClass = document.querySelector('#classInterface').classList;
  if (verifyClass === ar) {
    Ataque.classList.add = "ar"
    BuffElementar.classList.add = "ar"
  } else if (verifyClass === fogo) {
    Ataque.classList.add = "fogo"
    BuffElementar.classList.add = "fogo"
  } else if (verifyClass === terra) {
    Ataque.classList.add = "terra"
    BuffElementar.classList.add = "terra"
  } else if (verifyClass === agua) {
    Ataque.classList.add = "agua"
    BuffElementar.classList.add = "agua"
  }
  Ataque.innerText = 'Ataque';
  BuffElementar.innerText = 'Buff Elementar';
  localGame.appendChild(Ataque)
  localGame.appendChild(BuffElementar)
}

function geradorDeMundos (level) {
  if(level === undefined) {
    throw new Error('Erro no código, será resolvido em algumas horas.')
  }
  const divDoJogo = document.querySelector('#blocoGame');
  const nivel = level;
  const iniciante = document.createElement('button');
  const apagaDiv = document.querySelectorAll('.gameBlock');
  for (let i = 0; i < apagaDiv.length; i += 1) {
    divDoJogo.removeChild(apagaDiv[i]);
  }
  iniciante.innerText = 'level 0'
  iniciante.className = 'btn btn-outline-secondary'
  iniciante.id = 'levelZero'
  iniciante.addEventListener('click', (eve) => {
    iniciante.style.display = 'none'
    interfaceDeJogo()
  })
  divDoJogo.appendChild(iniciante);
  if (nivel > 1) {
    for (let i = 1; i < nivel; i += 1) {
      const elemento = document.createElement('button');
      elemento.innerText = `Level ${i}`
      elemento.className = 'btn btn-outline-secondary'
      divDoJogo.appendChild(elemento);
    }
  }
}

function novoJogo () {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', (eve) => {
    const botaoLoad = document.querySelector('#loadGame');
    botaoLoad.style.display = 'none';
    eve.target.style.display = 'none';
    geradorDeMundos(1); 
  })
}

function jogo () {
  const blocoGame = document.querySelector('#game');
  const perfil = document.querySelector('#idPerfil');
  perfil.style.display = 'initial'
  blocoGame.style.display = 'initial'
  novoJogo();
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
    classe.className = 'ar'
  } else if (fogo.checked === true) {
    imagem.src = "/personagens/fogo_puto.png"
    classe.innerHTML = 'Classe: Fogo'
    classe.className = 'fogo'
  } else if (agua.checked === true) {
    imagem.src = "/personagens/agua_puto.png"
    classe.innerHTML = 'Classe: Água'
    classe.className = 'agua'
  } else if (terra.checked === true) {
    imagem.src = "/personagens/terra_puto.png"
    classe.innerHTML = 'Classe: Terra'
    classe.className = 'terra'
  }
}

const divClasses = document.querySelector('#classes');
divClasses.addEventListener('click', (eve) => {
  const botao = document.querySelector('#playButton');
  if (ar.checked === true) {
      botao.disabled = false
    } else if (fogo.checked === true) {
      botao.disabled = false
    } else if (agua.checked === true) {
      botao.disabled = false
    } else if (terra.checked === true) {
      botao.disabled = false
    }
});

const play = document.querySelector('#playButton')
play.addEventListener('click', (eve) => {
    eve.preventDefault();
    savePlayer();
    newInterface();
    classe();
    jogo();
    verifyNick();
  });
  