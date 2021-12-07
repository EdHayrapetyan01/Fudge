import React from 'react';
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import UserImage from '../../../assets/Alex.png';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Header() {
  let history = useHistory();
  const logout = () => {
    history.push('/');
  };
  const user = { name: 'Alex Martin', id: uuidv4() };
  const currencyTypes = [
    { name: 'USD', id: uuidv4() },
    { name: 'EUR', id: uuidv4() },
    { name: 'CAD', id: uuidv4() },
    { name: 'ZAR', id: uuidv4() },
  ];

  return (
    <div className='header'>
      <Row>
        <Col sm='1'>
          <img style={{ width: '63px', height: '64px', borderRadius: '50%' }} src={UserImage} alt='' />
        </Col>
        <Col sm='8'>
          {' '}
          <p className='welcomeMsg'>
            Welcome ,<span className='username'> {user.name}</span>. Here’s your personalized financial dashboard{' '}
          </p>
        </Col>
        <Col sm='3'>
          <UncontrolledDropdown>
            <DropdownToggle caret>Currency: GBP</DropdownToggle>
            <DropdownMenu>
              {currencyTypes.map((currency) => (
                <DropdownItem key={currency.id}>{currency.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>

          <UncontrolledDropdown style={{ margin: '0px 0px 0px 46px' }}>
            <DropdownToggle caret>My Account</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={logout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
      </Row>
    </div>
  );
}
