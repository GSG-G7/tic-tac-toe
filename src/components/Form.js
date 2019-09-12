import React from "react";
import './Form.css'
export const Form = (props) => {
    return (
        <div className='form'>
            <div className='first'>
                <label>
                    X
                </label>
                <input type="text" name="firstPlayer" value={props.firstValue} onChange={(e) => props.onChange('first', e.target.value)} placeholder="Player One" />
            </div>
            <div className='second'>

                <label>
                    O
                </label>
                <input type="text" name="secondPlayer" value={props.secondValue} onChange={(e) => props.onChange('second', e.target.value)} placeholder="Player two" />
            </div>
        </div>
    );
}