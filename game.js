let tabuleiro = ['','','','','','','','','']; 
let vezJogador = 0;
let simbolo = ['o','x'];
let estadoVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let gameover = false;

function movimento(posicao){

    if(gameover){
        return;
    }
    if(tabuleiro[posicao]==''){
    tabuleiro[posicao] = simbolo[vezJogador];

    gameover = vencedor();
        if(gameover==false) {

            if(vezJogador==0) {
                vezJogador=1;
            }else{
                vezJogador=0;
            }
        }
    }
    return gameover;
}

function vencedor() {

    for(let i=0;i<estadoVitoria.length;i++){
        let seq = estadoVitoria[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1]==tabuleiro[pos2] && tabuleiro[pos1]==tabuleiro[pos3] && tabuleiro[pos1]!=''){
            return true;
        }
        
    }    return false;
}
