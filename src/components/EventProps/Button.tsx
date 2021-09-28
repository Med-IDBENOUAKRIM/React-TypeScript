import React from 'react';
import { ButtonProps } from './Event.types';



function Button({ handleClick }: ButtonProps) {
    return (
        <button onClick={(e) => handleClick(e, 5)} >Click</button>
    )
}

export default Button
