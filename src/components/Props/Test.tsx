import React from 'react';
import { TestProps } from './Props.types';


function Test({ name, count }: TestProps) {
    return (
        <div>
            <h1>Hi {name}, you have {count} notifications</h1>
        </div>
    )
}

export default Test
