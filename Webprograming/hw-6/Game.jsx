import React, { useState } from 'react';
import './Game.css';

// To add onclick handler
// useState, clicking the button changes into X

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

const Board = () => {
  const renderSquare = (i) =>  <Square />
  const status = 'Next player: X';
  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  )
}

const Square = () => {
  const [state, setState] = useState({value: null})
  return (
    <button  
      className="square"  
      onClick={() => setState({value: 'X'})}
    >
      {state.value}
    </button>
  )
}

export default Game;