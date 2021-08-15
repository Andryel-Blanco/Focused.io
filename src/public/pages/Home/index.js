import React, { useEffect, useState } from 'react';

import './Styles.scss';

import Logo from '../../assets/images/Logo.svg';

import Timer from '../../components/timer';
import SimpleButton from '../../components/simpleButton';

export default function HomePage() {

  const [loadAnimation, setLoadAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadAnimation(true);
      console.log('carregou');
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
          <SimpleButton buttonText={'Pause'} color={'#FF6258'}/>
          <Timer minutes={25} seconds={12}/>
          <SimpleButton buttonText={'Short Break'} color={'#58FF69'}/>
        </div>
      </div>
    </div>
  );
}

