console.log("welcome to TicTacToe");
let music = new Audio("gamemusic-6082.mp3");
let turn = new Audio("correct-2-46134.mp3");
let gameover = new Audio("level-win-6416.mp3");

let input = "X";
let over = false;

// Function to change the turn
const changeTurn = () => {
    return input === "X" ? "0" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
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
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = input;
            input = changeTurn();
            turn.play();
            checkWin();
            if (!over) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + input;
            }
        }
    })
})

//  Add onclick listner to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    input = "X"
    isover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + input;
    document.getElementsByClassName('imgbox')[0].style.width = "0px"

})