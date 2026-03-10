/**
 *
 * AccountMenu
 *
 */

import React from 'react';

import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

import Button from '../../Common/Button';
import { CloseIcon } from '../../Common/Icon';

const AccountMenu = props => {
  const { user, isMenuOpen, links, toggleMenu } = props;

  const getAllowedProvider = link => {
    if (!link.provider) return true;

    const userProvider = user.provider ?? '';
    if (!userProvider) return true;

    return link.provider.includes(userProvider);
  };

  const handleLinkClick = () => {
    if (typeof toggleMenu === 'function') toggleMenu();
  };

  return (
    <div className='panel-sidebar'>
      <div className='menu-header'>
        {isMenuOpen && (
          <Button
            borderless
            variant='empty'
            ariaLabel='close the menu'
            icon={<CloseIcon />}
            onClick={toggleMenu}
          />
        )}
      </div>

      <div className='menu-body'>
        <Container>
          <h3 className='panel-title'>Account</h3>
          <nav role='navigation'>
            <ul className='menu-list panel-links'>
              {links.map((link, index) => {
                const PREFIX = link.prefix ? link.prefix : '';
                const isProviderAllowed = getAllowedProvider(link);
                if (!isProviderAllowed) return null;
                return (
                  <li key={index} className='menu-item'>
                    <NavLink
                      onClick={handleLinkClick}
                      to={PREFIX + link.to}
                      activeClassName='active-link'
                      exact
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default AccountMenu;
