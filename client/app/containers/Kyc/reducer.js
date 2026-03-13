/*
 *
 * Kyc reducer
 *
 */

import {
    KYC_CHANGE,
    FETCH_KYC,
    CLEAR_KYC,
    SET_KYC_LOADING
} from './constants';

const initialState = {
    kycFormData: {
        aadharNumber: '',
        aadharPhoto: null,
        panNumber: '',
        panPhoto: null,
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        cancelCheque: null
    },
    kyc: null,
    formErrors: {},
    isLoading: false
};

const kycReducer = (state = initialState, action) => {
    switch (action.type) {
        case KYC_CHANGE:
            return {
                ...state,
                kycFormData: {
                    ...state.kycFormData,
                    ...action.payload
                }
            };
        case FETCH_KYC:
            return {
                ...state,
                kyc: action.payload
            };
        case CLEAR_KYC:
            return {
                ...state,
                kycFormData: {
                    aadharNumber: '',
                    aadharPhoto: null,
                    panNumber: '',
                    panPhoto: null,
                    bankName: '',
                    accountNumber: '',
                    ifscCode: '',
                    cancelCheque: null
                }
            };
        case SET_KYC_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default kycReducer;
