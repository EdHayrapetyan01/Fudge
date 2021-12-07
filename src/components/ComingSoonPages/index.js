import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Advisors({location}) {
  const urlPathName = location.pathname.slice(1);
  
  return (
    <div className='soonWrapper'>
      <div className='wrapper'>
        <div className='content'>
          <h1 className='pathname'>{urlPathName? urlPathName : ''} Section Coming Soon</h1>
          <p className='comingParagraph'>Perfect and awesome to present your future product or service.Hooking audience attention</p>

          <Link to={'dashboard'}>
            <button className='backToDashboard'>Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
