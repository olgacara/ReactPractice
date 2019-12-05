import React from 'react';
import './Char.css';

const char = (props) => {
    return <p onClick = {props.remove} className="Char">{props.letter}</p>
}

export default char;