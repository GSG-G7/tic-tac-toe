
import React from 'react'
import './Square.css'

export default ({ value, onClick }) => (
    <button  className="square" onClick={onClick}>
        {value}
    </button>
)