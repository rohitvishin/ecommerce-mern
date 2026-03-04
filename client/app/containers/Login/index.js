/*
 *
 * Login
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import SignupProvider from '../../components/Common/SignupProvider';
import ReCAPTCHA from 'react-google-recaptcha';

class Login extends React.PureComponent {
  state = {
    captchaError: false
  };
  componentDidMount() {
    const { merchant } = this.props.match.params;
    console.log('Merchant from URL:', merchant);
    setTimeout(() => {
      this.props.findMerchant(merchant);
    }, 200);
  }
  render() {
    const {
      authenticated,
      loginFormData,
      loginChange,
      login,
      formErrors,
      isLoading,
      isSubmitting
    } = this.props;
    const { captchaError } = this.state;

    if (authenticated) return <Redirect to='/dashboard' />;
    const { merchant } = this.props.match.params;
    loginFormData.store = merchant;
    const registerLink = () => {
      this.props.history.push(`/${merchant}/register`);
    };

    const handleSubmit = event => {
      event.preventDefault();
      const captchaToken = loginFormData && loginFormData.captchaToken;
      if (!captchaToken) {
        this.setState({ captchaError: true });
        return;
      }
      login();
    };

    return (
      <div className='login-form'>
        {isLoading && <LoadingIndicator />}
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: '6', order: 1 }}
              className='p-0'
            >
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Email Address'}
                  name={'email'}
                  placeholder={'Please Enter Your Email'}
                  value={loginFormData.email}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'password'}
                  error={formErrors['password']}
                  label={'Password'}
                  name={'password'}
                  placeholder={'Please Enter Your Password'}
                  value={loginFormData.password}
                  onInputChange={(name, value) => {
                    loginChange(name, value);
                  }}
                />
                <div className='mt-3 text-center'>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={value => {
                      loginChange('captchaToken', value);
                      this.setState({ captchaError: false });
                    }}
                    onExpired={() => {
                      loginChange('captchaToken', '');
                    }}
                  />
                  {(formErrors['captcha'] || (captchaError && 'Please complete the captcha')) && (
                    <div className='text-danger small mt-2'>
                      {formErrors['captcha'] || (captchaError && 'Please complete the captcha')}
                    </div>
                  )}
                </div>
              </Col>
            </Col>
            <Col
              xs={{ size: 12, order: 1 }}
              md={{ size: '6', order: 2 }}
              className='mb-2 mb-md-0'
            >
              <SignupProvider />
            </Col>
          </Row>
          <hr />
          <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
            <div className='d-flex justify-content-between align-items-center mb-3 mb-md-0'>
              <Button
                type='submit'
                variant='primary'
                text='Login'
                disabled={isSubmitting}
              />
              <Button
                text='Create an account'
                variant='link'
                className='ml-md-3'
                onClick={registerLink}
              />
            </div>
            <Link
              className='redirect-link forgot-password-link'
              to={`/${merchant}/forgot-password`}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authentication.authenticated,
    loginFormData: state.login.loginFormData,
    formErrors: state.login.formErrors,
    isLoading: state.login.isLoading,
    isSubmitting: state.login.isSubmitting,
  };
};

export default connect(mapStateToProps, actions)(Login);
