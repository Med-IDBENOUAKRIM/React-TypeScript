import React from 'react';
import { ParentType } from './Props.types';



function Parent({ children }: ParentType) {
    return (
        <div>
            {children}
        </div>
    )
}

export default Parent
