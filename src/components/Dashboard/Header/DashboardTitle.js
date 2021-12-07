import React from 'react';
import { Row, Col } from 'reactstrap';

import './style.scss';

export default function Header() {
  return (
    <div className='header'>
      <Row>
        <Col sm='3' style={{ maxWidth: '21%' }}>
          <h1 className='rootHeading'>Dashboard Home</h1>
        </Col>
        <Col>
          <hr className='dashboardHr' />
        </Col>
      </Row>
    </div>
  );
}
