import React from 'react'

const Caption = ({
  winner,
  turnCount
}) => {
  if (winner) {
    return <div className="scoreboard-caption">{winner} Wins!</div>
  } else if (turnCount === 9) {
    return <div className="scoreboard-caption">No Winner</div>
  }
}

export default Caption
