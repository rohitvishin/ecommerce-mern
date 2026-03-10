/*
 *
 * Customer
 *
 */

import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import AccountMenu from '../AccountMenu';
import Page404 from '../../Common/Page404';

import Account from '../../../containers/Account';
import AccountSecurity from '../../../containers/AccountSecurity';
import Address from '../../../containers/Address';
import Product from '../../../containers/Product';
import Brand from '../../../containers/Brand';
import Order from '../../../containers/Order';
import Wishlist from '../../../containers/WishList';
import Review from '../../../containers/Review';
import Button from '../../Common/Button';
import { BarsIcon } from '../../Common/Icon';

const Merchant = props => {
  const { isMenuOpen, toggleMenu } = props;
  return (
    <div className='merchant'>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <div onClick={toggleMenu} style={{ alignItems: 'center', display: 'flex' }}>
            <BarsIcon />
            <Button
              borderless
              variant='empty'
              text='Dashboard Menu'
              ariaLabel='open the menu'
            />
          </div>


        </Col>
        <Col xs='12' md='7' xl='9'>
          <div className='panel-body'>
            <Switch>
              <Route exact path='/dashboard' component={Account} />
              <Route path='/dashboard/security' component={AccountSecurity} />
              <Route path='/dashboard/address' component={Address} />
              <Route path='/dashboard/product' component={Product} />
              <Route path='/dashboard/brand' component={Brand} />
              <Route path='/dashboard/orders' component={Order} />
              <Route path='/dashboard/review' component={Review} />
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
      {/* hidden menu drawer */}
      <div
        className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}
        aria-hidden={`${isMenuOpen ? false : true}`}
      >
        <div className='mini-menu'>
          <AccountMenu {...props} />
        </div>
        <div
          className={
            isMenuOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
          }
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};



export default Merchant;
