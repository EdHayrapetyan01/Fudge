import React from 'react';
import Chart from './Chart';

import './style.scss';

export default function Performance() {
  return (
    <div className='chartContainer'>
      <p className='headingTitle'>My Performance</p>
      <Chart />
    </div>
  );
}
