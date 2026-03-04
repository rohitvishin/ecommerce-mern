/*
 *
 * MerchantSignup
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class MerchantSignup extends React.PureComponent {
  componentDidMount() {
    const email = this.props.location.search.split('=')[1];
    this.props.merchantSignupChange('email', email);
  }

  render() {
    const {
      signupFormData,
      formErrors,
      merchantSignupChange,
      merchantRegister,
      history
    } = this.props;

    const handleSubmit = event => {
      event.preventDefault();
      merchantRegister();
    };

    return (
      <div className='merchant-signup-form'>
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 6, offset: 3 }} className='p-0'>
              <Col xs='12' md='12'>
                <h2 className='text-center'>Merchant Sign Up</h2>
                <hr />
              </Col>

              <Row>
                <Col xs='6' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['email']}
                    label={'Email Address'}
                    name={'email'}
                    placeholder={'Please Enter Your Email'}
                    value={signupFormData.email}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='6' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['phone']}
                    label={'Phone'}
                    name={'phone'}
                    placeholder={'Please Enter Your Phone Number'}
                    value={signupFormData.phone}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs='6' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['firstName']}
                    label={'First Name'}
                    name={'firstName'}
                    placeholder={'Please Enter Your First Name'}
                    value={signupFormData.firstName}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='6' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['lastName']}
                    label={'Last Name'}
                    name={'lastName'}
                    placeholder={'Please Enter Your Last Name'}
                    value={signupFormData.lastName}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs='6' md='6'>
                  <Input
                    type={'password'}
                    label={'Password'}
                    error={formErrors['password']}
                    name={'password'}
                    placeholder={'Please Enter Your Password'}
                    value={signupFormData.password}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='6' md='6'>
                  <Input
                    type={'text'}
                    error={formErrors['storeName']}
                    label={'Store Name'}
                    name={'storeName'}
                    placeholder={'Please Enter Your Store Name'}
                    value={signupFormData.storeName}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs='12' md='12'>
                  <Input
                    type={'text'}
                    error={formErrors['business']}
                    label={'Business description'}
                    name={'business'}
                    placeholder={'Please Enter Your Business Description'}
                    value={signupFormData.business}
                    onInputChange={(name, value) => {
                      merchantSignupChange(name, value);
                    }}
                  />
                </Col>
              </Row>
              <Col xs='12' md='12'>
                <Button
                  className='mt-3 mr-3'
                  type='submit'
                  variant='primary'
                  text='Get Started'
                />
                <Button
                  className='mt-3'
                  type='button'
                  variant='secondary'
                  onClick={() => {
                    history.goBack();
                  }}
                  text='Go Back'
                />
              </Col>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupFormData: state.merchant.signupFormData,
    formErrors: state.merchant.signupFormErrors,
    shopName: state.shop.shopName,
    shopNumber: state.shop.shopNumber
  };
};

export default connect(mapStateToProps, actions)(MerchantSignup);
