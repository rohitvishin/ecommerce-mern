/*
 *
 * Shop actions
 *
 */

import { DEFAULT_ACTION, SET_SHOP_INFO } from './constants';

export const defaultAction = () => {
  return {
    type: DEFAULT_ACTION
  };
};

export const setShopInfo = (shopName = 'zoekart', shopNumber = '8108889047') => {
  return {
    type: SET_SHOP_INFO,
    payload: {
      shopName,
      shopNumber
    }
  };
};