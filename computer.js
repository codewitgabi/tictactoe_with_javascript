let gamePads = document.getElementsByClassName("game-pad");
let currentPlayer = document.getElementById("current-player");
let count = 0;
let gameBoard = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
let winner = 0;
let restartGame = document.getElementById("restart");

for (let i = 0; i < gamePads.length; i++) {
	gamePads[i].addEventListener("click", function () {
		if (this.textContent === "") {
			if (count % 2 == 0) {
				this.textContent = "X";
				this.style.color = "red";
				gameBoard[this.id[0]][this.id[1]] = "X";

				winner = checkWinner();

				if (winner !== undefined) {
					currentPlayer.textContent = "Player 1 wins!!!";
					disableGamePads();
					count = 0;
					return;
				}
				else if (count == 8)
				{
					currentPlayer.textContent = "It's a draw!!!";
					disableGamePads();
					count = 0;
					return;
				}
				computerMove();
				
				winner = checkWinner();
				
				if (winner !== undefined) {
					currentPlayer.textContent = "Computer wins!!!";
					disableGamePads();
					count = 0;
					return;
				}
				else if (count == 8)
				{
					currentPlayer.textContent = "It's a draw!!!";
					disableGamePads();
					count = 0;
					return;
				}
			}
			count += 2;
		}
	});
}

function computerMove () {
    let f = Math.round(Math.random() * 2);
    let s = Math.round(Math.random() * 2);
    let move = gameBoard[f][s];
    while (typeof move == "string") {
        f = Math.round(Math.random() * 2);
        s = Math.round(Math.random() * 2);
        move = gameBoard[f][s];
    }
    const pad = document.getElementById(`${f}${s}`)
    pad.textContent = "O";
    pad.style.color = "blue";
    gameBoard[f][s] = "O";
}

function checkWinner () {
	/* check rows */
	for (let i = 0; i < 3; i++) {
		if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
			return gameBoard[i][0];
		}
	}

	/* check columns */
	for (let j = 0; j < 3; j++) {
		if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[0][j] === gameBoard[2][j]) {
			return gameBoard[0][j];
		}
	}

	/* check diagonals */
	if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
		return gameBoard[1][1];
	}

	if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
		return gameBoard[2][1];
	}
}

function resetBoard () {
	gameBoard = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
}

function clearGamePads () {
	for (let k = 0; k < gamePads.length; k++) {
		gamePads[k].textContent = "";
	}
}

const disableGamePads = () => {
    for (let i =0; i < gamePads.length; i++) {
        gamePads[i].disabled = true;
    }
}

const enableGamePads = () => {
    for (let i =0; i < gamePads.length; i++) {
        gamePads[i].disabled = false;
    }
}

restartGame.addEventListener("click", () => {
	resetBoard();
	clearGamePads();
	enableGamePads();
});