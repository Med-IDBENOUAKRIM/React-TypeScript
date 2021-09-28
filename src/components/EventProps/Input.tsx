import React from 'react'
import { InputProps } from './Event.types'



function Input({ value, handleChange }: InputProps) {
    return (
        <div>
            <input 
                type="text"
                value={value}
                onChange={handleChange}
            />   
        </div>
    )
}

export default Input
