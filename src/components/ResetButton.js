import React from "react"
import "../styles/ResetButton.scss"

const ResetButton = ({
  turnCount,
  setTurnCount,
  gameBoard,
  gameNumber,
  setGameNumber,
  winner,
  setWinner,
  winningLineState,
  setWinningLineState,
  setBoardState,
  setXSelections,
  setOSelections
}) => {
  const handleClick = () => {
    setWinner("")
    setBoardState(
     [["","",""],
      ["","",""],
      ["","",""]]
    )
    setXSelections({
      "1h": 0,
      "2h": 0,
      "3h": 0,
      "1v": 0,
      "2v": 0,
      "3v": 0,
      "1d": 0,
      "2d": 0,
    })
    setOSelections({
      "1h": 0,
      "2h": 0,
      "3h": 0,
      "1v": 0,
      "2v": 0,
      "3v": 0,
      "1d": 0,
      "2d": 0,
    })
    clearBoardClasses()
    setGameNumber(gameNumber + 1)
  }

  const clearBoardClasses = () => {
    if (winningLineState === "1h") {
      gameBoard.querySelector(".square:nth-child(1)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(2)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(3)").classList.remove("line-complete")
    } else if (winningLineState === "2h") {
      gameBoard.querySelector(".square:nth-child(4)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(6)").classList.remove("line-complete")
    } else if (winningLineState === "3h") {
      gameBoard.querySelector(".square:nth-child(7)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(8)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(9)").classList.remove("line-complete")
    } else if (winningLineState === "1v") {
      gameBoard.querySelector(".square:nth-child(1)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(4)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(7)").classList.remove("line-complete")
    } else if (winningLineState === "2v") {
      gameBoard.querySelector(".square:nth-child(2)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(8)").classList.remove("line-complete")
    } else if (winningLineState === "3v") {
      gameBoard.querySelector(".square:nth-child(3)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(6)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(9)").classList.remove("line-complete")
    } else if (winningLineState === "1d") {
      gameBoard.querySelector(".square:nth-child(1)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(9)").classList.remove("line-complete")
    } else if (winningLineState === "2d") {
      gameBoard.querySelector(".square:nth-child(3)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(5)").classList.remove("line-complete")
      gameBoard.querySelector(".square:nth-child(7)").classList.remove("line-complete")
    }
    gameBoard.classList.remove("complete", "winner-x", "winner-o")
    setWinningLineState("")
    setTurnCount(0)
  }

  if (winner || turnCount === 9) {
    return (
      <button className="reset-button" onClick={() => handleClick()}>
        New Game
      </button>
    )
  }
}

export default ResetButton
