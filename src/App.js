import React from 'react';
import Board from './classComponents/Board'
import { calculateWinner } from './utlis/calculateWinner';
import './App.css';

class App extends React.Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber:history.length
    })
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }
  
  render() {
    const { history, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
      const desc = move ? `Jump to ${move}` : 'Go to start game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if(winner) {
      status = `Winner is ${winner}`;
    } else {
      status = `Next Player: ${(this.state.xIsNext ? 'X' : 'O')}`
    }
    
    return (
      <div className="App">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
           />
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
