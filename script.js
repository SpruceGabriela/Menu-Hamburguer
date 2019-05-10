let janela = document.querySelector('.janela');
let menu = document.querySelector('.menu')


function abrirMenu(){
  janela.classList.toggle('abrirMenu');
  menu.classList.toggle('abrirMenu');
}

menu.onclick = abrirMenu;