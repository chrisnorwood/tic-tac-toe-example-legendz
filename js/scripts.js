const GameBoard = GameBoardFactory();

function sendUserChoiceToFactory(e) {
    let storeE = e.id
    // returns the value of the dom element
    let clicked = true
    let getValue = document.getElementById(storeE).getAttributeNode("value").value
    if(clicked) {
        clicked = false
        GameBoard.insertPlayerChoice(getValue)
        //GameBoard.insertPlayerChoice(Math.floor((Math.random() * 9) ))
        GameBoard.printGameBoard()
    }
    
}
function sendUserPieceToFactory(e) {
    let storeUserPieceID = e.id
    GameBoard.playerPiece(storeUserPieceID)
}

function callResetBoard() {
    GameBoard.resetGameBoard()
    GameBoard.printGameBoard()
}



GameBoard.resetGameBoard()
