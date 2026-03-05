/**
 *
 * OrderDetails
 *
 */

import React from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';

import OrderMeta from '../OrderMeta';
import OrderItems from '../OrderItems';
import OrderSummary from '../OrderSummary';

const OrderDetails = props => {
  const { order, user, cancelOrder, updateOrderItemStatus, onBack, downloadInvoice } = props;
  return (
    <div className='order-details'>
      <Row>
        <Col xs='12' md='12'>
          <OrderMeta order={order} cancelOrder={cancelOrder} onBack={onBack} />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs='12' lg='8'>
          <OrderItems
            order={order}
            user={user}
            updateOrderItemStatus={updateOrderItemStatus}
          />
        </Col>
        <Col xs='12' lg='4' className='mt-5 mt-lg-0'>
          <OrderSummary order={order} />
        </Col>
        <div className='order-actions p-2'>
          <button
            className='btn btn-sm btn-outline-primary'
            onClick={() => downloadInvoice(order._id)}
          >
            Download Invoice
          </button>
        </div>
      </Row>
    </div>
  );
};

export default OrderDetails;
