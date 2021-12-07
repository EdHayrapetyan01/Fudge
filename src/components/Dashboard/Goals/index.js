import React from 'react';
import { Row } from 'reactstrap';
import Trackers from './Trackers';
import Modal from './Modal';

export default function Goals() {
  return (
    <>
      <div className='financial' style={{ marginBottom: '30px' }}>
        <p className='headingTitle'>My Goals</p>
        <Modal />
      </div>

      <Row className='trackerRow'>
        <div className='goalTracker'>
          <Trackers count={65} name={'Retriment '}currency={2000} />
        </div>
        <div className='goalTracker'>
          <Trackers count={78} name={'Vacation Home'} currency={2000}/>
        </div>
        <div className='goalTracker'>
          <Trackers count={46} name={'Travel'} currency={2000} />
        </div>
      </Row>
    </>
  );
}
