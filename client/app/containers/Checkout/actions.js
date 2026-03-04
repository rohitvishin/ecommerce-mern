import { goBack, push } from 'connected-react-router';
import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
    HANDLE_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    HANDLE_CART_TOTAL,
    SET_CART_ID,
    CLEAR_CART
} from './constants';

import {
    SET_PRODUCT_SHOP_FORM_ERRORS,
    RESET_PRODUCT_SHOP
} from '../Product/constants';

import { clearCart, getCartId } from '../Cart/actions';
import { API_URL, CART_ID, CART_ITEMS, CART_TOTAL } from '../../constants';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { toggleCart } from '../Navigation/actions';

import {
    CHECKOUT_CHANGE,
    SET_CHECKOUT_FORM_ERRORS,
    RESET_CHECKOUT,
    SET_CHECKOUT_LOADING,
    SET_ORDER_SUMMARY,
    SET_CART_ITEMS
} from './constants';

export const checkoutChange = (name, value) => ({
    type: CHECKOUT_CHANGE,
    payload: { [name]: value }
});

export const setCheckoutFormErrors = errors => ({
    type: SET_CHECKOUT_FORM_ERRORS,
    payload: errors
});

export const resetCheckout = () => ({
    type: RESET_CHECKOUT
});

export const setCheckoutLoading = status => ({
    type: SET_CHECKOUT_LOADING,
    payload: status
});

export const setOrderSummary = summary => ({
    type: SET_ORDER_SUMMARY,
    payload: summary
});

export const setCartItems = items => ({
    type: SET_CART_ITEMS,
    payload: items
});

const validateCheckout = formData => {
    const errors = {};

    if (!formData.firstName) errors.firstName = 'First name is required.';
    if (!formData.lastName) errors.lastName = 'Last name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    if (!formData.phone) errors.phone = 'Phone is required.';

    if (!formData.address) errors.address = 'Address is required.';
    if (!formData.city) errors.city = 'City is required.';
    if (!formData.state) errors.state = 'State is required.';
    if (!formData.country) errors.country = 'Country is required.';
    if (!formData.pincode) errors.pincode = 'Pincode is required.';

    if (formData.paymentMethod === 'card') {
        if (!formData.cardNumber) errors.cardNumber = 'Card number is required.';
        if (!formData.expiry) errors.expiry = 'Expiry is required.';
        if (!formData.cvv) errors.cvv = 'CVV is required.';
    }

    return errors;
};

export const placeOrder = () => async (dispatch, getState) => {
    dispatch(setCheckoutLoading(true));

    const { checkoutFormData } = getState().checkout;
    const errors = validateCheckout(checkoutFormData);

    if (Object.keys(errors).length) {
        dispatch(setCheckoutFormErrors(errors));
        dispatch(setCheckoutLoading(false));
        return;
    }

    try {
        Promise.all([dispatch(getCartId())]).then(async () => {
            const response = await axios.post(`${API_URL}/order/checkout`, checkoutFormData);

            if (response.data.success === true) {
                dispatch(setCheckoutFormErrors({}));
                dispatch(resetCheckout());
                dispatch(clearCart());
            }
        });

    } catch (error) {
        dispatch(
            setCheckoutFormErrors({
                general: 'Unable to place order. Please try again.'
            })
        );
    } finally {
        dispatch(setCheckoutLoading(false));
        dispatch(push('/dashboard/orders'));
    }
};

export default {
    checkoutChange,
    setCheckoutFormErrors,
    resetCheckout,
    setCheckoutLoading,
    setOrderSummary,
    setCartItems,
    placeOrder
};