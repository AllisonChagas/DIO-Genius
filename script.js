let order = [];
let clickOrder = [];
let score = 0;

/** 
 * 0 - verde
 * 1 - vermelho
 * 2 - amarelo
 * 3 - azul
*/
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const byellow = document.querySelector('.yellow')
const green = document.querySelector('.green')


// Fução para criar ordem aleatoria de cores
let shuffleOrder =() =>{
    let colorOrder = Math.floor(Math.random() *4);
    order[order.length] = colorOrder;
    clickOrder =[];

    for( let i in order ){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}
// Função para acender próxima cor
let ligthColor = (element, number)=>{
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(()=>{
        element.classList.remove('selected')
    });

}
// Função para checar se os botões clicados foram os mesmos gerados
let checkOrder = ()=>{
    for(let i in clickOrder){
        if(clickOrder[1] !=order[1]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou!! Iniciando Próximo nível`);
        nextLevel();
    }
}

//Função para clicks do usuario

let click = (color) =>{
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

// Função que muda a cor
let createColorElement = (color) =>{
    if(color == 0){
        return green;
    }else if(color ==1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color ==3){
        return blue;
    }
}

// Função para mudar o nivel
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//Função game Over

let gameOver = () =>{
    alert(`Fim de Jogo: ${score}\nVocê perdeu!!\nClick em Ok para Inciar um novo jogo`);
    order =[];
    clickOrder = [];
    playGame();
}

let playGame =() =>{
    alert('Bem vindo ao Genius! Iniciando um novo jogo!');
    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
playGame();