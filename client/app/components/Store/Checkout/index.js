/**
 *
 * Checkout
 *
 */

import React from 'react';

import actions from '../../../containers/Checkout/actions';
import Button from '../../Common/Button';
import { connect } from 'react-redux';

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckoutLogin, handleCheckout } = props;

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Continue shopping'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant='primary'
            text='Checkout'
            onClick={() => handleCheckout()}
          />
        ) : (
          <Button
            variant='primary'
            text='Proceed To Checkout'
            onClick={() => handleCheckoutLogin()}
          />
        )}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    authenticated: state.authentication.authenticated
  }),
  dispatch => ({
    handleShopping: () => dispatch(actions.handleShopping()),
    handleCheckout: () => dispatch(actions.handleCheckout()),
    handleCheckoutLogin: () => dispatch(actions.handleCheckoutLogin())
  })
)(Checkout);
