import React, { Component } from 'react'
import Square from '../functionComponents/Square'
import { calculateWinner } from '../utlis/calculateWinner';
export default class Board extends Component {

    state = {
        squares: Array(9).fill(null),
        xIsNext: true
    }

    handleClick(i) {
        const { xIsNext } = this.state;
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext && !squares[i] ? 'X' : 'O';
        this.setState({ squares: squares, xIsNext: !xIsNext });
    }
    renderSquare = (i) => {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }

    render() {
        const { xIsNext, squares } = this.state;
        const winner = calculateWinner(squares);
        let status;
        console.log(winner)
        if (winner) {
            status = `Winner is : ${winner}`
        } else {

            status = `Next is:${(xIsNext ? 'X' : 'O')}`;
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">

                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}

                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
