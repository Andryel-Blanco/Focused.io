import React, { useEffect, useState } from 'react';

import './Styles.scss';

import Logo from '../../assets/images/Logo.svg';

import Timer from '../../components/timer';
import SimpleButton from '../../components/simpleButton';
import SimpleCircle from '../../components/simpleCircle';

export default function HomePage() {

  const [loadAnimation, setLoadAnimation] = useState(false);

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(59);
 
  useEffect(() => {
    setTimeout(() => {
      setLoadAnimation(true);
    }, 3000);

  }, []);

  return (
    <div className="container-page">
      <div className={loadAnimation ? 'display-none' : 'logo-animation'}>
        <img src={Logo} className='tilt-in-fwd-tr' alt='Logotipo do website'/>
      </div>
      <header className={loadAnimation ? 'header-content' : 'display-none'}>
        <img src={Logo} id='logo-img' alt='Logotipo do website'/>
        <div className='help-icon no-select'><span id='icon'>i</span></div>
      </header>
      <div className={loadAnimation ? 'loaded' : 'display-none'}>
        <div className='timer-content'>
          <SimpleButton buttonText={''} color={'#58AFFF'} onClick={''} textButton={false} />
          <Timer minutes={''} seconds={''}/>
          <SimpleButton buttonText={'Short Break'} color={'#58FF69'} textButton={true} />
        </div>
        <div className='buttons-container'>
          <SimpleCircle textValue={'-5'}/>
          <SimpleCircle type={'icon'}/>
          <SimpleCircle textValue={'+5'}/>
        </div>
      </div>
    </div>
  );
}

