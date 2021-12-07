import React, { useEffect } from 'react';
import Header from '../Dashboard/Header/Header';

import QuickStats from '../Dashboard/QuickStats/index';
import FinancialHealth from '../Dashboard/FinancialHealth/index';
import Performance from '../Dashboard/Performance/index';
import Goals from '../Dashboard/Goals/index';
import IndustryNews from '../Dashboard/IndustryNews/index';
import CommentsAndUsers from '../Dashboard/CommentsAndUsers/index';
import DashboardTitle from './Header/DashboardTitle';
import { Row, Col } from 'reactstrap';

import './style.scss';

function Dashboard() {
  useEffect(() => {
    //handling react routerV4 scrolling navigation
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='dashboardContainer'>
      <Row>
        <Col sm='2'></Col>
        <Col sm='10' className='dashboardContent'>
          <Row className='rootRow'>
            <Header />
            <DashboardTitle />

            <Col className='rootWrapper'>
              <QuickStats />
              <Performance />
              <IndustryNews />
            </Col>
            <Col className='rootWrapper'>
              <FinancialHealth />
              <Goals />
              <CommentsAndUsers />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
