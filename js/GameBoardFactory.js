const GameBoardFactory = () => {
  let _x = 0
  this._gameBoard = [
      [''],[''],[''],
      [''],[''],[''],
      [''],[''],['']
  ]
  let _userChoosenPiece = ""
  let _userAIPiece = ""

  const _showGameBoard = () => {
      let playArea = document.getElementById("playArea")
      let choosePiece = document.getElementById("choosePiece")
      playArea.style.display = "grid"
      choosePiece.style.display = "none"
      
  }

  const playerPiece = (clicked) => {
      _userChoosenPiece = clicked
      console.log(_userChoosenPiece)
      _showGameBoard()
  }

  const printGameBoard = () =>  _gameBoard.forEach((gameBoardPiece) => {
      document.getElementById("block_"+_x).innerHTML = gameBoardPiece
      _x++
  },_x = 0)
  
  const resetGameBoard = () => {
      let playArea = document.getElementById("playArea")
      let choosePiece = document.getElementById("choosePiece")
      playArea.style.display = "none"
      choosePiece.style.display = "flex"
      _gameBoard = [
          [''],[''],[''],
          [''],[''],[''],
          [''],[''],['']
      ]
  }

  
  let insertPlayerChoice = (x) => _gameBoard[x] = _userChoosenPiece

  return {
    printGameBoard,
    insertPlayerChoice,
    resetGameBoard,
    playerPiece
  };
};
