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
					resetBoard();
					clearGamePads();
					return;
				}

				currentPlayer.textContent = "Player 2";
			} else {
				this.textContent = "O";
				this.style.color = "blue";
				gameBoard[this.id[0]][this.id[1]] = "O";

				winner = checkWinner();

				if (winner !== undefined) {
					currentPlayer.textContent = "Player 2 wins!!!";
					resetBoard();
					clearGamePads();
					return;
				}

				currentPlayer.textContent = "Player 1";
			}
			count++;
			//console.log(gameBoard);
		}
	});
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

restartGame.addEventListener("click", () => {
	resetBoard();
	clearGamePads();
});