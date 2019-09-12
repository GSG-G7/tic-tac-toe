import React from 'react';
import { Board } from './components/Board'
import { calculateWinner } from './utlis/calculateWinner';
import { Form } from './components/Form'
import './App.css';

class App extends React.Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
    first: null,
    second: null,
    start: false
  }

  hadleChange = (property, value) => {
    this.setState({ [property]: value })

  }

  handleStart = () => {
    const { first, second } = this.state;
    if (first && second) {
      this.setState({ start: true })
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
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
      stepNumber: history.length
    })
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const { history, stepNumber, first, second, start } = this.state;
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
    if (winner) {
      status = `Winner is ${(winner === 'X' ? first : second)}`;
    } else {
      status = `Next Player: ${(this.state.xIsNext ? first : second)}`
    }

    return (
      <div className="App">
        {start ?
          <div className="game">
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </div>
            <div className="game-info">
              <div className="status">{status}</div>
              <ol className="moves">{moves}</ol>
            </div>
          </div> :
          <div className="players-form">
            <Form onChange={this.hadleChange} firstValue={first} secondValue={second} />
            <button className='start' onClick={this.handleStart}>Start</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
