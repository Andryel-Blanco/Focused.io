import React from 'react';

import './Styles.scss';

export default function Timer(props){
    return(
        <div className='timer-circle'>
            <h1 className='timer-time'>{props.minutes}:{props.seconds}</h1>
        </div>
    )
}