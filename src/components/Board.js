import React, {useEffect} from "react"
import "../styles/Board.scss"

const Board = ({
  gameBoard,
  turnCount,
  setTurnCount,
  activePlayer,
  setActivePlayer,
  winner,
  setWinner,
  winArray,
  setWinArray,
  streak,
  setStreak,
  setWinningLineState,
  scoreX,
  setScoreX,
  scoreO,
  setScoreO,
  boardState,
  setBoardState,
  xSelections,
  setXSelections,
  oSelections,
  setOSelections
}) => {
  useEffect(() => {
    checkForWinner()
    // eslint-disable-next-line
  },[boardState]) // This may be incorrect, shouldnt need to useEffect to update "setXSelections" & "setOSelections"...

  const selectSquare = (player, row, column) => {
    const newBoardState = Array.from(boardState)
    if (player === "X") {
      newBoardState[row][column] = "X"
      setXSelections(xSelections => populateMap(xSelections, row, column))
    } else {
      newBoardState[row][column] = "O"
      setOSelections(oSelections => populateMap(oSelections, row, column))
    }
    setBoardState(newBoardState)
    setTurnCount(turnCount + 1)
    checkForWinner()
  }

  const populateMap = (selections, row, column) => {
    const updatedSelections = {...selections}
    if (row === 0 & column === 0) {
      updatedSelections["1h"] = selections["1h"] + 1
      updatedSelections["1v"] = selections["1v"] + 1
      updatedSelections["1d"] = selections["1d"] + 1
    } else if (row === 1 & column === 0) {
      updatedSelections["2h"] = selections["2h"] + 1
      updatedSelections["1v"] = selections["1v"] + 1
    } else if (row === 2 & column === 0) {
      updatedSelections["3h"] = selections["3h"] + 1
      updatedSelections["1v"] = selections["1v"] + 1
      updatedSelections["2d"] = selections["2d"] + 1
    } else if (row === 0 & column === 1) {
      updatedSelections["1h"] = selections["1h"] + 1
      updatedSelections["2v"] = selections["2v"] + 1
    } else if (row === 1 & column === 1) {
      updatedSelections["2h"] = selections["2h"] + 1
      updatedSelections["2v"] = selections["2v"] + 1
      updatedSelections["1d"] = selections["1d"] + 1
      updatedSelections["2d"] = selections["2d"] + 1
    } else if (row === 2 & column === 1) {
      updatedSelections["3h"] = selections["3h"] + 1
      updatedSelections["2v"] = selections["2v"] + 1
    } else if (row === 0 & column === 2) {
      updatedSelections["1h"] = selections["1h"] + 1
      updatedSelections["3v"] = selections["3v"] + 1
      updatedSelections["2d"] = selections["2d"] + 1
    } else if (row === 1 & column === 2) {
      updatedSelections["2h"] = selections["2h"] + 1
      updatedSelections["3v"] = selections["3v"] + 1
    } else if (row === 2 & column === 2) {
      updatedSelections["3h"] = selections["3h"] + 1
      updatedSelections["3v"] = selections["3v"] + 1
      updatedSelections["1d"] = selections["1d"] + 1
    }
    return updatedSelections
  }

  const changePlayer = player => {
    if (player === "X") {
      setActivePlayer("O")
    } else {
      setActivePlayer("X")
    }
  }

  const checkForWinner = () => {
    for (const property in xSelections) {
      if (xSelections[property] === 3) {
        endGame("X", property)
        return
      }
    }
    for (const property in oSelections) {
      if (oSelections[property] === 3) {
        endGame("O", property)
        return
      }
    }
  }

  const endGame =(winner, winningLine) => {
    if (winner === "X") {
      setScoreX(scoreX + 1)
    } else {
      setScoreO(scoreO + 1)
    }
    setWinner(winner)
    setWinArray(winArray => [...winArray, winner])
    if (winner === winArray[winArray.length - 1]) {
      setStreak(streak + 1)
    } else {
      setStreak(1)
    }
    endHover(winner)
    highlightWinningLine(winningLine)
  }

  const endHover = winner => {
    if (winner === "X") {
      gameBoard.classList.add("complete", "winner-x")
    } else {
      gameBoard.classList.add("complete", "winner-o")
    }
  }

  const highlightWinningLine = (winningLine) => {
    setWinningLineState(winningLine)
    if (winningLine === "1h") {
      gameBoard.querySelector(".square:nth-child(1)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(2)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(3)").classList.add("line-complete")
    } else if (winningLine === "2h") {
      gameBoard.querySelector(".square:nth-child(4)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(6)").classList.add("line-complete")
    } else if (winningLine === "3h") {
      gameBoard.querySelector(".square:nth-child(7)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(8)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(9)").classList.add("line-complete")
    } else if (winningLine === "1v") {
      gameBoard.querySelector(".square:nth-child(1)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(4)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(7)").classList.add("line-complete")
    } else if (winningLine === "2v") {
      gameBoard.querySelector(".square:nth-child(2)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(8)").classList.add("line-complete")
    } else if (winningLine === "3v") {
      gameBoard.querySelector(".square:nth-child(3)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(6)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(9)").classList.add("line-complete")
    } else if (winningLine === "1d") {
      gameBoard.querySelector(".square:nth-child(1)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(9)").classList.add("line-complete")
    } else if (winningLine === "2d") {
      gameBoard.querySelector(".square:nth-child(3)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.add("line-complete")
      gameBoard.querySelector(".square:nth-child(7)").classList.add("line-complete")
    }
  }

  const handleSquareClick = (row, column, event) => {
    if (winner) return
    if (boardState[row][column] === "") {
      selectSquare(activePlayer, row, column)
      changePlayer(activePlayer)
      event.target.classList.add("selected")
    }
  }

  return (
    <div className="board">
      <span className="square" onClick={e => handleSquareClick(0,0,e)}>{boardState[0][0]}<span className="square-hover">{activePlayer}</span></span><span className="square" onClick={e => handleSquareClick(0,1,e)}>{boardState[0][1]}<span className="square-hover">{activePlayer}</span></span><span className="square" onClick={e => handleSquareClick(0,2,e)}>{boardState[0][2]}<span className="square-hover">{activePlayer}</span></span>
      <span className="square" onClick={e => handleSquareClick(1,0,e)}>{boardState[1][0]}<span className="square-hover">{activePlayer}</span></span><span className="square" onClick={e => handleSquareClick(1,1,e)}>{boardState[1][1]}<span className="square-hover">{activePlayer}</span></span><span className="square" onClick={e => handleSquareClick(1,2,e)}>{boardState[1][2]}<span className="square-hover">{activePlayer}</span></span>
      <span className="square" onClick={e => handleSquareClick(2,0,e)}>{boardState[2][0]}<span className="square-hover">{activePlayer}</span></span><span className="square" onClick={e => handleSquareClick(2,1,e)}>{boardState[2][1]}<span className="square-hover">{activePlayer}</span></span><span className="square" onClick={e => handleSquareClick(2,2,e)}>{boardState[2][2]}<span className="square-hover">{activePlayer}</span></span>
    </div>
  )
}

export default Board
