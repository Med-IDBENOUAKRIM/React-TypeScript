import React from 'react';
import { PersonListProps } from './Props.types';



function PersonList({ infoList }: PersonListProps) {
    return (
        <div>
            {
                infoList.map((person, i) => (
                    <ul key={i} >
                        <ol>{person.first} {person.last}</ol>
                        <ol>{person.age}</ol>
                    </ul>
                ))
            }
        </div>
    )
}

export default PersonList
