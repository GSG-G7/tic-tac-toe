import React from 'react'
import Square from './Square'
export const Board = (props) => {
    const renderSquare = (i) => {
        return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
    }
    const renderRows = () => {
        let rows = [];
        let index = 0;
        for (let i = 0; i < 3; i++) {
            let squares = [];
            for (let j = 0; j < 3; j++) {
                squares.push(renderSquare(index))
                index++;
            }
            rows.push(<div className="board-row">{squares}</div>)
        }
        return rows;
    }
    return (
        <div>
            {renderRows()}
        </div >
    );
}
