/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const Checkout = props => {
  const { authenticated, handleShopping, processOrder, handleCheckoutLogin } = props;

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
            onClick={() => processOrder()}
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

export default Checkout;
