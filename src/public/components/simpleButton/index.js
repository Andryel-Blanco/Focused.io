import React from 'react';

import './Styles.scss';

export default function SimpleButton(props){
    return(
        <div className='container' style={{backgroundColor: props.color}} onClick={props.onClick}>
            {props.textButton === true ? 
                <h1 className='button-text' onClick={props.shortBreak}>{props.buttonText >= 4 ? 'Long Break' : 'Short Break'}</h1>
                : <h1 className='button-text'>{props.buttonText ? 'Pause' : 'Start'}</h1>
            }

        </div>
    )
}