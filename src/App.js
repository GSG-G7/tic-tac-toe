import React from 'react';
import Board from './classComponents/Board'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="game-board">
        <Board />
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/*ToDo*/}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
