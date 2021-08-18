import React from 'react';

import './Styles.scss';

import { FiBell, FiBellOff } from "react-icons/fi";

export default function SimpleCircle(props){
    return(
        <div className='circle'>
            {props.type == 'icon' ? 
                <FiBell
                    size={40}
                    color={'#066F68'}
                /> : 
                <h1>{props.textValue}</h1>
            }
        </div>
    )
}