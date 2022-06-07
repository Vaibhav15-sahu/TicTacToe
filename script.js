console.log("Tic Tac Toe") ;
let turn = "X" ;
let gameover = false ;

var ad = new Audio('mixkit-arcade-game-jump-coin-216.wav') ;
var adio = new Audio('mixkit-video-game-win-2016.wav');

// TO change Turn 
const changeTurn = () =>{
    return turn === "X"? "0":"X" ;
}

//TO check Win 
const checkWin = () =>{

    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true ;
            // reset();
            adio.play() ;
        }
    })
    
}

//Game Logic 
let boxes = document.getElementsByClassName("box") ;
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText') ;
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn ;
            turn = changeTurn() ;
            ad.play() ;
            checkWin() ;
            if(!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
            }
        }
    }) 
})

function reset(){
    let boxes = document.getElementsByClassName('box') ;
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector('.boxText') ;
        boxtext.innerText = '' ;
    })
    turn = 'X' ;
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
}