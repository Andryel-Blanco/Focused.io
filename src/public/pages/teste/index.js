import React, { useEffect, useState } from 'react';


export default function Teste(){

    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(10);

    const [start, setStart] = useState(false);

    useEffect(()=>{
        if(minutes <= 0){
            setStart(false);
            setMinutes(25);
        }

        if(minutes >= 59){
            setMinutes(59);
        }
    }, [minutes])

    useEffect(()=>{
        setTimeout(() => {
            // if(count <= 1){
            //     setStart(false);
            //     setCount(7);
            // }
            if(start){
                // if(minutes === 0 && seconds === 0){
                //     setStart(false);
                //     setMinutes(1);
                //     setSeconds(59);
                // }
                // if(minutes === 0 && seconds <= 1){
                //     console.log('Menos 1 minuto');
                //     setMinutes(minutes - 1 );
                //     setSeconds(59);
                // }
                
                if(seconds <= 0){
                    if(minutes > 0){
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                    else{
                        setStart(false);
                        setSeconds(59);
                    }
                }
                else{
                    setSeconds(seconds - 1)
                }
            }
        }, 1000); 
    }, [start, seconds])

    return(
        <>
            
            <h1>{minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</h1>
            <button onClick={()=>{setStart(!start)}}>Start/Stop</button>
            <button onClick={()=>{setMinutes(minutes + 5)}}>+5</button>
            <button onClick={()=>{setMinutes(minutes - 5)}}>-5</button>
        </>
    )
}