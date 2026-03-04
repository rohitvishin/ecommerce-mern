/*
 *
 * Products reducer
 *
 */

import { DEFAULT_ACTION, SET_SHOP_INFO } from './constants';

const initialState = {};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return {
        ...state
      };
    case SET_SHOP_INFO:
      return {
        ...state,
        shopName: action.payload.shopName,
        shopNumber: action.payload.shopNumber
      };
    default:
      return state;
  }
};

export default productsReducer;
