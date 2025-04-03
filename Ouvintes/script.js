const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('meuBotao');
const evento = document.getElementById('evento');
botao.addEventListener('click', imprimir );
botao.addEventListener('mouseover', 
function(){
    mensagem.textContent = "voce passou em mim.";
}
);

botao.addEventListener('mouseover', function(){
    evento.innerHTML = alert("Voce foi invadido")
}
);
function imprimir(){
    mensagem.textContent = "Voce clicou em mim";
}