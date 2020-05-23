//let gameBoard = [
    //['O','O','O'],
    //['X','X','X'],
    //['O','O','O']
//]

const gameBoardFactory = () => {
    this._gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    const printGameBoard = () => console.log(_gameBoard)
    let insertPlayerChoice = (x,y,z) => _gameBoard[x][y] = z

    return {printGameBoard, insertPlayerChoice}
}

const gameBoard2 = gameBoardFactory()

//gameBoard2.printGameBoard()
function getPlayerChoice() {
    let i = 0
    while(i<9) {
        if(i % 2 == 0) {
            gameBoard2.insertPlayerChoice(prompt("Choose X"),prompt("Choose Y"),"X")
            gameBoard2.printGameBoard()
        } else {
            gameBoard2.insertPlayerChoice(prompt("Choose X"),prompt("Choose Y"),"O")
            gameBoard2.printGameBoard()
        }
        i++;
    }
    //gameBoard2.insertPlayerChoice(0,0,"X")
    //gameBoard2.printGameBoard()
}
getPlayerChoice()
//gameBoard2.printGameBoard()