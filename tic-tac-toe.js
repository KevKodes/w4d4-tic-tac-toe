document.addEventListener('DOMContentLoaded', event => {

  // PLAYER CLICKS SECTION
  const xImageSrc = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
  const oImageSrc = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
  const gameBoard = document.getElementById('tic-tac-toe-board');
  let count = 0;
  let statusArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let gameStatus = document.getElementById('game-status');
  let blocker = '';

  gameBoard.addEventListener('click', event => {
    if (blocker !== '') return;
    const newImage = document.createElement('img');
    const square = event.target.id
    const squareNum = square.split('-')[1];

    if (count % 2 === 0) {
      newImage.setAttribute('src', xImageSrc);
      newImage.setAttribute('class', 'xOccupied');
      statusArray[squareNum] = 'x';
    } else {
      newImage.setAttribute('src', oImageSrc);
      newImage.setAttribute('class', 'oOccupied')
      statusArray[squareNum] = 'o';
    }
    document.getElementById(square).appendChild(newImage);
    count++;
    checkIfOver(statusArray);
  })

  // GAME STATUS SECTION
  // Function checks if the game is over
  // called in the click event above
  function checkIfOver(arr) {
    const row1 = [arr[0], arr[1], arr[2]];
    const row2 = [arr[3], arr[4], arr[5]];
    const row3 = [arr[6], arr[7], arr[8]];
    const col1 = [arr[0], arr[3], arr[6]];
    const col2 = [arr[1], arr[4], arr[7]];
    const col3 = [arr[2], arr[5], arr[8]];
    const diag1 = [arr[0], arr[4], arr[8]];
    const diag2 = [arr[2], arr[4], arr[6]];
    const totalArr = [row1, row2, row3, col1, col2, col3, diag1, diag2];
    let winner;
    let filteredArr = arr.filter(el => el !== 0);

    for (let i = 0; i < totalArr.length; i++) {
      let checkArr = totalArr[i];
      if (checkArr[0] !== 0 && checkArr[0] === checkArr[1] && checkArr[0] === checkArr[2]) {
        winner = checkArr[0];
        gameStatus.innerText = 'Winner: ' + winner.toUpperCase();
        blocker = 'won';
      } else if (filteredArr.length === 9) {
        gameStatus.innerText = 'Winner: None'
        winner = 'tied'
        blocker = winner;
      }
    }

  }
})
