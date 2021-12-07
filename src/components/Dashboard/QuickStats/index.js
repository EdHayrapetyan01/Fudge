import React from 'react';
import { Col, Row } from 'reactstrap';

import './style.scss';

export default function QuickStats() {
  return (
    <div>
      <p className='headingTitle'>Quick stats</p>
      <Row>
        <Col sm='5'>
          <div className='quickStatWrapper'>
            <p className='currency'>£12,430</p>
            <p className='statParagraph'>Your net worth as of today</p>
          </div>
        </Col>

        <Col sm='3'>
          <div className='quickStatWrapper'>
            <p className='currency'>£12,430</p>
            <p className='statParagraph'>Monthy Cashflow</p>
          </div>
        </Col>
        <Col sm='3'>
          <div className='quickStatWrapper'>
            <p className='currency'>£161,430</p>
            <p className='statParagraph'>Overall Liabilities</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
