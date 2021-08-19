import React from 'react';

import './Styles.scss';

export default function Timer(props){
    return(
        <div className='timer-circle'>
            <h1 className='timer-time'>{props.minutes < 10 ? '0' + props.minutes : props.minutes} : {props.seconds < 10 ? '0' + props.seconds : props.seconds}</h1>
        </div>
    )
}