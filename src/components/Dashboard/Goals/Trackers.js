import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';

import AnimatedProgressProvider from './AnimatedProgressProvider';
import './style.scss';

export default function Trackers(props) {
  return (
    <div>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={props.count}
        duration={1.4}
        easingFunction={easeQuadInOut}
        strokeWidth={1}
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <div className='AnimatedProgressProvider'>
              <p className='name'>{props.name}</p>
              <div className='tracker'>
                <CircularProgressbarWithChildren
                  value={value}
                  text={`${roundedValue}%`}
                  strokeWidth={1}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    stroke: 'green',
                  })}
                >
                  <div style={{ fontSize: 12, marginTop: 45 }}>
                    <p>On Track</p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>

              <hr className='progressBarHr' />
              <div className='budget'>
                <p>€{props.currency}</p> <p>€{props.currency}</p>
              </div>
            </div>
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
}
