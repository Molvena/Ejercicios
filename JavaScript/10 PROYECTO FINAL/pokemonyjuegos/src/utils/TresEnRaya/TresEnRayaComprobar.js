
// Variables globales
// let gameBoard = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = 'X';
// let gameOver = false;

// // Obtener las celdas del tablero
// //Seleccionamos todos los botones
// const cells = document.querySelectorAll('.cell');
// //Iteramos con un forEach
// // Función para actualizar el tablero
// const updateBoard = () => {
//   cells.forEach((cell, index) => {
//     cell.textContent = gameBoard[index];
//   });
// }

// // Función para comprobar si alguien ha ganado
// const checkWinner = () => {
//   // Comprobar filas
//   if (
//     (gameBoard[0] === currentPlayer && gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer) ||
//     (gameBoard[3] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[5] === currentPlayer) ||
//     (gameBoard[6] === currentPlayer && gameBoard[7] === currentPlayer && gameBoard[8] === currentPlayer)
//   ) {
//     return true;
//   }

//   // Comprobar columnas
//   if (
//     (gameBoard[0] === currentPlayer && gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer) ||
//     (gameBoard[1] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer) ||
//     (gameBoard[2] === currentPlayer && gameBoard[5] === currentPlayer && gameBoard[8] === currentPlayer)
//   ) {
//     return true;
//   }

//   // Comprobar diagonales
//   if (
//     (gameBoard[0] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) ||
//     (gameBoard[2] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer)
//   ) {
//     return true;
//   }

//   return false;
// }

// // Función para cambiar de jugador
// //En cada turno va poniendo la X ó la O
// const switchPlayer = () => {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// }

// // Función para reiniciar el juego
// const resetGame = () => {
//   gameBoard = ['', '', '', '', '', '', '', '', ''];
//   currentPlayer = 'X';
//   gameOver = false;
//   updateBoard();
// }

// // Asignar eventos a las celdas del tablero
// //Aqui creo una fucion que me diga si he ganado. lo tengo que hacer y se llamara TresEnRayaCell()
// cells.forEach((cell, index) => {
//   cell.addEventListener('click', () => {
//     // Si el juego ya ha terminado o la celda ya ha sido marcada, no hacer nada
//     if (gameOver || gameBoard[index]) {
//       return;
//     }

//     // Marcar la celda con el símbolo del jugador actual
//     gameBoard[index] = currentPlayer;
//     updateBoard();

//     // Comprobar si alguien ha ganado
//     if (checkWinner()) {
//       alert(`¡${currentPlayer} ha ganado!`);
//       gameOver = true;
//       return;
//     }

//     // Si no hay ganador y todas las celdas están marcadas, el juego ha terminado en empate
//     if (!gameBoard.includes('')) {
//       alert('¡Empate!');
//       gameOver = true;
//       return;
//     }

//     // Cambiar de jugador
//     switchPlayer();
//   });
// });

// // Asignar evento al botón de reinicio
// const resetButton = document.getElementById('reset-button');
// resetButton.addEventListener('click', resetGame);
