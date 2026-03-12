/*
 *
 * Checkout reducer
 *
 */

import {
    CHECKOUT_CHANGE,
    SET_CHECKOUT_FORM_ERRORS,
    RESET_CHECKOUT,
    SET_CHECKOUT_LOADING,
    SET_ORDER_SUMMARY,
    SET_CART_ITEMS
} from './constants';

const initialState = {
    cartItems: [],
    orderSummary: {
        subtotal: 0,
        shipping: 0,
        total: 0
    },
    checkoutFormData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: 'India',
        pincode: '',
        paymentMethod: 'cod',
        cardNumber: '',
        expiry: '',
        cvv: ''
    },
    formErrors: {},
    isLoading: false
};

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            };

        case SET_ORDER_SUMMARY:
            return {
                ...state,
                orderSummary: action.payload
            };

        case CHECKOUT_CHANGE:
            return {
                ...state,
                checkoutFormData: {
                    ...state.checkoutFormData,
                    ...action.payload
                }
            };

        case SET_CHECKOUT_FORM_ERRORS:
            return {
                ...state,
                formErrors: action.payload
            };

        case RESET_CHECKOUT:
            return {
                ...state,
                checkoutFormData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                    state: '',
                    country: '',
                    pincode: '',
                    paymentMethod: 'cod',
                    cardNumber: '',
                    expiry: '',
                    cvv: ''
                },
                formErrors: {}
            };

        case SET_CHECKOUT_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state;
    }
};

export default checkoutReducer;