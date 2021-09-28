import React from 'react';
import Parent from './Parent';
import { PersonProps } from './Props.types';



function Person({info}: PersonProps) {
    return (
        <Parent>
            <p>My name is {info.first} {info.last} and I'm {info.age} years old.</p>
        </Parent>
    )
}

export default Person
