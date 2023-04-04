document.addEventListener('DOMContentLoaded',()=>{

    let quadrado= document.querySelectorAll(".quadrado");
    quadrado.forEach((quadrado)=>{
        quadrado.addEventListener('click', Click);
    })
    let reset= document.querySelector(".reset");
    reset.addEventListener('click', novoJogo);
})

function Click(event) {

    let quadrado = event.target;
    let posicao = quadrado.id;

    if(movimento(posicao)){
    
        setTimeout(()=>{
        alert("O jogo acabou- O vencedor foi o jogador: "+(vezJogador+1));
        },10);

    }
    atualizaQuadrados();
    
}
function atualizaQuadrados() {
    let quadrado= document.querySelectorAll(".quadrado");

    quadrado.forEach((quadrado)=>{
        let posicao = quadrado.id;
        let simbolo = tabuleiro[posicao];

        if(simbolo!=''){
            quadrado.innerHTML = `<div class= '${simbolo}'></div>`
        }

    })
}
function novoJogo() {
    tabuleiro = ['','','','','','','','',''];
    vezJogador = 0;
    gameover = false;

    let quadrado= document.querySelectorAll(".quadrado");

    quadrado.forEach((quadrado)=>{
        quadrado.textContent = '';
        quadrado.classList.remove('o');
        quadrado.classList.remove('x');

    })
}

