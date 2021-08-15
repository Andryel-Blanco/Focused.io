import React from 'react';

import './Styles.scss';

export default function SimpleButton(props){
    return(
        <div className='container' style={{backgroundColor: props.color}}>
            <h1 className='button-text'>{props.buttonText}</h1>
        </div>
    )
}