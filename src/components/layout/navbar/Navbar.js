import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Logo from '../../../assets/Logo.png';

import './style.scss';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={'nav-menu'}>
          <ul className='nav-menu-items'>
            <div className='logoDiv'>
              <img className='logo' src={Logo} alt='' />
            </div>
            <div className='sidebarSection'>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className='nav-text'>
                    <NavLink to={item.path} activeClassName='isActiveRoute'>
                      {item.icon}
                      <span className='itemTitle'>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
