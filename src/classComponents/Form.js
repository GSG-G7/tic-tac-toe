import React, { Component } from 'react'

export default class Form extends Component {
 render() {
        return (
            <div>
                <div>
                <label>
                    Player X 
                    <input type="text" name="firstPlayer" value={this.props.firstValue} onChange={this.props.first} placeholder="Enter Name"/>
                </label>
                </div>
                <div>

              <label>
                  Player: O
              <input type="text" name="secondPlayer" value={this.props.secondValue} onChange={this.props.second} placeholder="Enter Name"/>
              </label>
                </div>
            </div>
        )
    }
}
