import React from "react"
import Caption from "./Caption.js"
import "../styles/Scoreboard.scss"

const ScoreBoard = ({
  gameNumber,
  turnCount,
  activePlayer,
  winner,
  winArray,
  setWinArray,
  streak,
  setStreak,
  scoreX,
  scoreO
}) => {

  return (
    <div className="scoreboard-wrapper">
      <Caption winner={winner} turnCount={turnCount} />
      <div className="scoreboard">
        <div className="scoreboard__game-info">
          <div className="scoreboard__game-title">Game</div>
          <div className="scoreboard__game-count">{gameNumber}</div>
        </div>
        <div className={`scoreboard__team x ${activePlayer === "X" && !winner && turnCount < 9 ? "active" : ""}`}>
          <div className="scoreboard__turn-status">Your Move</div>
          <span className="scoreboard__teamname">X</span>
          <span className="scoreboard__wins">{scoreX}</span>
        </div>

        <div className={`scoreboard__team o ${activePlayer === "O"  && !winner && turnCount < 9 ? "active" : ""}`}>
          <div className="scoreboard__turn-status">Your Move</div>
          <span className="scoreboard__wins">{scoreO}</span>
          <span className="scoreboard__teamname">O</span>
        </div>
        <div className="scoreboard__streak-info">
          <div className="scoreboard__streak-title">Streak</div>
          <div className="scoreboard__streak-count">{winArray[winArray.length - 1]} {streak}</div>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
