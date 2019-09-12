import React from "react";

export const Form = (props) => {
    return (
        <div>
            <div>
                <label>
                    Player X
                    <input type="text" name="firstPlayer" value={props.firstValue} onChange={(e) => props.onChange('first', e.target.value)} placeholder="Enter Name" />
                </label>
            </div>
            <div>

                <label>
                    Player: O
              <input type="text" name="secondPlayer" value={props.secondValue} onChange={(e) => props.onChange('second', e.target.value)} placeholder="Enter Name" />
                </label>
            </div>
        </div>
    );
}