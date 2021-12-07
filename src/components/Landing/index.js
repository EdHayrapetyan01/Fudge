import React, { useState } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Logo from '../../assets/Logo.png';
import ArrowDown from '../../assets/arrow-down.svg';
import { useHistory } from 'react-router-dom';

import './style.scss';

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);
  let history = useHistory();

  const handleIsLoadedToggle = () => {
    setIsLoaded((currentIsLoaded) => !currentIsLoaded);
    setTimeout(() => {
      setIsLoaded((currentIsLoaded) => !currentIsLoaded);
      history.push('/dashboard');
    }, 2000);
  };
  return (
    <div>
      <FullPage>
        <Slide>
          <div className='landing'>
            <img className='lLogo' src={Logo} alt='' />
            <img className='arrow' src={ArrowDown} alt='' />
          </div>
        </Slide>
        <Slide>
          {isLoaded ? (
            <div className='landing'>
              <div className='starter'>
                <div style={{ paddingTop: '20%' }}>
                  <div class='progress-line'></div>
                </div>
              </div>
            </div>
          ) : (
            <div className='landing'>
              <div className='content'>
                <img className='nd' src={Logo} alt='' />
                <p className='landingParagraph'>All your finances in one place.</p>
                <p className='landingParagraph2'>
                  Find out how our team of highly qualified financial consultants can help you achieve your financial
                  goals.
                </p>
                <button className='dashboardBtn' onClick={handleIsLoadedToggle}>
                  view dashboard
                </button>
              </div>
            </div>
          )}
        </Slide>
      </FullPage>
    </div>
  );
}
