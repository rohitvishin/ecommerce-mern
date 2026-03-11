/*
 *
 * Kyc actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
    KYC_CHANGE,
    FETCH_KYC,
    CLEAR_KYC,
    SET_KYC_LOADING
} from './constants';
import handleError from '../../utils/error';
import { API_URL } from '../../constants';

export const kycChange = (name, value) => {
    let formData = {};
    formData[name] = value;

    return {
        type: KYC_CHANGE,
        payload: formData
    };
};

export const clearKyc = () => {
    return {
        type: CLEAR_KYC
    };
};

export const setKycLoading = value => {
    return {
        type: SET_KYC_LOADING,
        payload: value
    };
};

export const fetchKyc = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setKycLoading(true));
            const response = await axios.get(`${API_URL}/merchant/kyc/me`);

            dispatch({ type: FETCH_KYC, payload: response.data.kyc });
        } catch (error) {
            handleError(error, dispatch);
        } finally {
            dispatch(setKycLoading(false));
        }
    };
};

export const submitKyc = () => {
    return async (dispatch, getState) => {
        const kycFormData = getState().kyc.kycFormData;

        try {
            const form = new FormData();
            Object.keys(kycFormData).forEach(key => {
                if (kycFormData[key] !== null && typeof kycFormData[key] !== 'undefined') {
                    form.append(key, kycFormData[key]);
                }
            });

            const response = await axios.post(`${API_URL}/merchant/kyc`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const successfulOptions = {
                title: `${response.data.message}`,
                position: 'tr',
                autoDismiss: 1
            };

            dispatch({ type: FETCH_KYC, payload: response.data.kyc });
            dispatch({ type: CLEAR_KYC });

            dispatch(success(successfulOptions));
        } catch (error) {
            handleError(error, dispatch);
        }
    };
};
