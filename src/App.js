import './App.css';
import Board from './components/Board.js';
import ScoreBoard from './components/ScoreBoard.js';
import ResetButton from './components/ResetButton.js';
import React, { useState } from "react"

function App() {
  const gameBoard = document.querySelector(".board")
  const [gameNumber, setGameNumber] = useState(1)
  const [turnCount, setTurnCount] = useState(0)
  const [activePlayer, setActivePlayer] = useState("X")
  const [winner, setWinner] = useState("")
  const [winArray, setWinArray] = useState([])
  const [streak, setStreak] = useState(0)
  const [winningLineState, setWinningLineState] = useState("")
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [boardState, setBoardState] = useState(
    [["","",""],
     ["","",""],
     ["","",""]]
  )
  const [xSelections, setXSelections] = useState({
    "1h": 0,
    "2h": 0,
    "3h": 0,
    "1v": 0,
    "2v": 0,
    "3v": 0,
    "1d": 0,
    "2d": 0,
  })
  const [oSelections, setOSelections] = useState({
    "1h": 0,
    "2h": 0,
    "3h": 0,
    "1v": 0,
    "2v": 0,
    "3v": 0,
    "1d": 0,
    "2d": 0,
  })

  return (
    <div className="App">
      <Board
        gameBoard={gameBoard}
        turnCount={turnCount}
        setTurnCount={setTurnCount}
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        winner={winner}
        setWinner={setWinner}
        streak={streak}
        setStreak={setStreak}
        winArray={winArray}
        setWinArray={setWinArray}
        winningLineState={winningLineState}
        setWinningLineState={setWinningLineState}
        scoreX={scoreX}
        setScoreX={setScoreX}
        scoreO={scoreO}
        setScoreO={setScoreO}
        boardState={boardState}
        setBoardState={setBoardState}
        xSelections={xSelections}
        setXSelections={setXSelections}
        oSelections={oSelections}
        setOSelections={setOSelections}
      />
      <ResetButton
        gameBoard={gameBoard}
        gameNumber={gameNumber}
        turnCount={turnCount}
        setTurnCount={setTurnCount}
        setGameNumber={setGameNumber}
        winner={winner}
        setWinner={setWinner}
        winningLineState={winningLineState}
        setWinningLineState={setWinningLineState}
        setBoardState={setBoardState}
        setXSelections={setXSelections}
        setOSelections={setOSelections}
      />
      <ScoreBoard
        gameNumber={gameNumber}
        turnCount={turnCount}
        activePlayer={activePlayer}
        winner={winner}
        winArray={winArray}
        setWinArray={winArray}
        streak={streak}
        setStreak={setStreak}
        scoreX={scoreX}
        scoreO={scoreO}
      />
    </div>
  );
}

export default App;
