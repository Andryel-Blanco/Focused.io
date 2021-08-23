import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


// import NotificationSound from '../../assets/music/Notification.mp3';
import NotificationSoundTwo from '../../assets/music/Notification.wav';

import Logo from '../../assets/images/Logo.svg';
import './Styles.scss';
import 'react-toastify/dist/ReactToastify.css';

import Timer from '../../components/timer';
import SimpleButton from '../../components/simpleButton';
import SimpleCircle from '../../components/simpleCircle';
// eslint-disable-next-line react-hooks/exhaustive-deps
export default function HomePage() {

  const [loadAnimation, setLoadAnimation] = useState(false);

  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);
  const [start, setStart] = useState(false);
  const [breakCounter, setBreakCounter] = useState(0);
  const [soundNotification, setSoundNotification] = useState(true);

  const soundOn = () => toast.warning("Sound notification activated");
  const soundOff = () => toast.error("Sound notification disabled");

  useEffect(()=>{
    if(minutes >= 59){
      setMinutes(59);
    }
    if(minutes < 0){
      setMinutes(0);
    }
  }, [minutes])

  useEffect(()=>{
      if(minutes <= 0){
        if(seconds <= 0){
          handleAlarm()
          setMinutes(24);
          setSeconds(59);
          setStart(false);
          notifyUser('Cycle finished', 'The time is over!')
        }
      }
  }, [seconds])

  useEffect(()=>{
      setTimeout(() => {
          if(start){  
              if(seconds <= 0){
                  if(minutes > 0){
                    setSeconds(59);
                    setMinutes(minutes - 1);
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
 
  useEffect(() => {
    setTimeout(() => {
      setLoadAnimation(true);
    }, 3000);

  }, []);

  useEffect(()=>{
    if(soundNotification){
      soundOn();
    }
    else{
      soundOff();
    }
  }, [soundNotification])

  function spawnNotification(title, body) { 
    const notification = new Notification(title, {
      body: body,
      silent: true,
    })
  }

  function notifyUser(title, body) {
    if (!("Notification" in window)) {
      alert("Este browser não suporta notificações de Desktop");
    }
    else if (Notification.permission === "granted") {
      spawnNotification(title, body);
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          spawnNotification(title, body);
        }
      });
    }
  }

  function handleShortBreak(){
    const shortBreak = () => toast.info("Time for a short break!");
    const longBreak = () => toast.info("Time for a long break!");

    setStart(false);

    setTimeout(() => {
      if(breakCounter >= 4){
        longBreak();
        setBreakCounter(0);
        setMinutes(15);
        setSeconds(0);
      }
      else{
        shortBreak();
        setMinutes(5);
        setSeconds(0);
        setBreakCounter(breakCounter + 1);
      }
    }, 1000);
  }

  function handleAlarm(){
    if(soundNotification){
      var Notification = new Audio(NotificationSoundTwo);
      Notification.play();
    }
  }

  return (
    <div className="container-page">
      <ToastContainer className='desktop-only' />
      <div className={loadAnimation ? 'display-none' : 'logo-animation'}>
        <img src={Logo} className='tilt-in-fwd-tr' alt='Logotipo do website'/>
      </div>
      <header className={loadAnimation ? 'header-content' : 'display-none'}>
        <img src={Logo} id='logo-img' alt='Logotipo do website'/>
        {/* <div className='help-icon no-select'><span id='icon'>i</span></div> */}
      </header>
      <div className={loadAnimation ? 'loaded' : 'display-none'}>
        <div className='timer-content-mobile'>
          <Timer minutes={minutes} seconds={seconds}/>
          <SimpleButton buttonText={start} color={'#58AFFF'} onClick={()=>{setStart(!start)}} textButton={false} />
          <SimpleButton buttonText={breakCounter} color={'#58FF69'} textButton={true} onClick={()=>{handleShortBreak()}} />
        </div>
        <div className='timer-content-desktop'>
          <SimpleButton buttonText={start} color={'#58AFFF'} onClick={()=>{setStart(!start)}} textButton={false} />
          <Timer minutes={minutes} seconds={seconds}/>
          <SimpleButton buttonText={breakCounter} color={'#58FF69'} textButton={true} onClick={()=>{handleShortBreak()}} />
        </div>
        <div className='buttons-container'>
          <SimpleCircle textValue={'-5'} onClick={()=>{setMinutes(minutes - 5)}}/>
          <SimpleCircle type={'icon'} changeIcon={soundNotification} onClick={()=>{setSoundNotification(!soundNotification)}}/>
          <SimpleCircle textValue={'+5'} onClick={()=>{setMinutes(minutes + 5)}}/>
        </div>
      </div>
    </div>
  );
}

