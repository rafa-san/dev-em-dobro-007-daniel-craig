/*
OBJETIVO: Quando clicarmos no botão, temos que mostrar a imagem de fundo e o texto correspondente.

Passo 1: Dar um jeito de pegar o elemento HTML dos botões e das imagens.

Passo 2: Dar um jeito de identificar o clique do usuário no botão.

Passo 3: Desmarcar o botão selecionado anterior.

Passo 4: Marcar o botão clicado como se estivesse selecionado.

Passo 5: Esconder a imagem ativa e o texto ativo anterior.

Passo 6: Fazer aparecer a imagem e o texto correspondente ao botão clicado.
*/

// Passo 1: Dar um jeito de pegar o elemento HTML dos botões e das imagens.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem'); // foi colocado no passo 6.
const titulos = document.querySelectorAll('.titulo-filme');
const paragrafos = document.querySelectorAll('.sinopse');

// Passo 2: Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => { // o indice foi colocado no passo 6.
  botao.addEventListener('click', () => {
    
    // Passo 3: Desmarcar o botão selecionado anterior.
    desmarcarBotao();

    // Passo 4: Marcar o botão clicado como se estivesse selecionado.
    marcarBotao(botao);

    // Passo 5: Esconder a imagem ativa e o texto ativo anterior.
    esconderImagem();
    esconderTitulo();
    esconderSinopse();
    
    // Passo 6: Fazer aparecer a imagem e o texto correspondente ao botão clicado.
    mostrarImagem(indice);
    mostrarTitulo(indice);
    mostrarParagrafo(indice);
  })
})

function mostrarParagrafo(indice) {
  paragrafos[indice].classList.add('sinopse-ativa');
}

function mostrarTitulo(indice) {
  titulos[indice].classList.add('ativo');
}

function mostrarImagem(indice) {
  imagens[indice].classList.add('ativa');
}

function esconderSinopse() {
  const sinopseAtiva = document.querySelector('.sinopse-ativa');
  sinopseAtiva.classList.remove('sinopse-ativa');
}

function esconderTitulo() {
  const tituloAtivo = document.querySelector('.ativo');
  tituloAtivo.classList.remove('ativo');
}

function esconderImagem() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function marcarBotao(botao) {
  botao.classList.add('selecionado');
}

function desmarcarBotao() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

