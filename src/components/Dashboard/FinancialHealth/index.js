import React from 'react';
import { Link } from 'react-router-dom';
import FinancialModal from './Modal';
import './style.scss';

export default function FinancialHealth() {
  return (
    <div>
      <div className='financial'>
        <p className='headingTitle'>My Financial Health</p>
        <FinancialModal />
      </div>

      <div className='FinancialHealth'>
        <div className='linear'>
          <hr />
          <div className='averageStatistic'>
            <p>Poor</p>
            <p>Average</p>
            <p>Good</p>
          </div>

          <p className='averageContent'>
            Your financial health status is <span>GOOD</span> However there’s still room for improvement.
            <Link to={{ pathname: 'https://asq.org/quality-resources/statistics' }} target='_blank'>
              {' '}
              See how you can improve
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
