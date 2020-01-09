<!-- board set up -->
var gameBoard;
var player1 = 'X';
var player2 = 'O';
var winner = false;
const boxes = document.getElementsByClassName("game");
<!-- Allowing the users to take terns -->
function eachTurn(boxID, player) {
    if (winner) {
        boxes[i].removeEventListener('click', playerTwo, false);
        boxes[i].removeEventListener('click', playerOne, false);
    } else {
        gameBoard[boxID] = player;
        document.getElementById(boxID).innerText = player;
    }
}
function playerOne(playOne) {
    eachTurn(playOne.target.id, player1);
    checkForWinner();
    playerTwoListener();

}
function playerTwo(playTwo) {
    eachTurn(playTwo.target.id, player2);
    checkForWinner();
    playOneListener();

}

function playOneListener() {
    console.log("ln 32");
    for (var i = 0; i < gameBoard.length; i++) {
        boxes[i].addEventListener('click', playerOne, false);

        boxes[i].removeEventListener('click', playerTwo, false);
    }
}
function playerTwoListener() {
    for (var i = 0; i < gameBoard.length; i++) {
        boxes[i].addEventListener('click', playerTwo, false);
        boxes[i].removeEventListener('click', playerOne, false);
    }
}
<!-- End of user tern code -->

<!-- How the game determines a win -->
const way2win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
function sameString(arr) {
    console.log(arr.every( q => q === arr[0] && q !== '') + " ln 65");
    return arr.every( q => q === arr[0] && q !== '');
}

function endGame(win) {
    if (win[0] === player1){
        TernOnLights(`1`, 0,true);
        //window.alert("Game Over! Player One Wins");
    } else if (win[0] === player2) {
        TernOnLights('1', 40000, true);
        //window.alert("Game Over! Player Two Wins");
    }
}

function checkForWinner(){
    const grid = gameBoard;
    way2win.forEach(a => {
        console.log("ln 75");
        var gridSequence = [grid[a[0]], grid[a[1]], grid[a[2]]];
        console.log(gridSequence + " ln 78");
        if(sameString(gridSequence)){
            winner = true;
            endGame(gridSequence);
        }
    });
    return winner;
}
//get connected
function GetLightURI(id) {
    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI + id + "/";
}

function TernOnLights(id, colour, on) {
        var colourLight = {"on": on, "hue": colour};
        $.ajax({
            url: GetLightURI(id) + "state/",
            type: "PUT",
            data: JSON.stringify(colourLight)
            })
    }


<!-- HTML buttons code -->
function startGame() {
    winner = false;
    gameBoard = Array.from(document.getElementsByClassName("game"));
    playOneListener();
    TernOnLights(1, 0, false);
    for(var i = 0; i < gameBoard.length; i++){
        boxes[i].innerText = "";
    }
}
function info() {
    window.alert("How To Play:\nEach player will take it in turns to add a symbol to the playing board." +
        " If a player is able to get a sequence of three symbols in a row then they win and their playing colour " +
        "will show on the hue light. If no one is able to get a sequence then the game is a draw." +
        " \n\nPress the Start Game button to start and reset the game." +
        "\nThe Player Info button will tell you the symbol and colour each player is.");
}