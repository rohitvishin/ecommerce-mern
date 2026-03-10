/*
 *
 * Brand
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import actions from '../../actions';
import Page404 from '../../components/Common/Page404';

class Kyc extends React.PureComponent {
    render() {
        <></>
    }
}

const mapStateToProps = state => {
    return {
        user: state.account.user,
        shopName: state.account.shopName
    };
};

export default connect(mapStateToProps, actions)(Kyc);
