/*
 *
 * Kyc
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import SubPage from '../../components/Manager/SubPage';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Kyc extends React.PureComponent {
    handleSubmit = event => {
        event.preventDefault();
        this.props.submitKyc();
    };

    handleFileChange = e => {
        this.props.kycChange(e.target.name, e.target.files[0]);
    };

    render() {
        const { kycFormData, formErrors, kycChange, isLoading } = this.props;

        return (
            <div className='kyc'>
                <SubPage title={'KYC Details'} isMenuOpen={null}>
                    <div className='kyc-form'>
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type={'text'}
                                        label={'Aadhar Number'}
                                        name={'aadharNumber'}
                                        placeholder={'Enter your Aadhar Number'}
                                        value={kycFormData.aadharNumber}
                                        error={formErrors['aadharNumber']}
                                        onInputChange={(name, value) => kycChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <div className='input-box'>
                                        <label>Aadhar Photo</label>
                                        <input
                                            type='file'
                                            name='aadharPhoto'
                                            accept='image/*'
                                            className='input-text'
                                            onChange={this.handleFileChange}
                                        />
                                        {formErrors['aadharPhoto'] && (
                                            <span className='invalid-message'>{formErrors['aadharPhoto']}</span>
                                        )}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type={'text'}
                                        label={'PAN Number'}
                                        name={'panNumber'}
                                        placeholder={'Enter your PAN Number'}
                                        value={kycFormData.panNumber}
                                        error={formErrors['panNumber']}
                                        onInputChange={(name, value) => kycChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <div className='input-box'>
                                        <label>PAN Photo</label>
                                        <input
                                            type='file'
                                            name='panPhoto'
                                            accept='image/*'
                                            className='input-text'
                                            onChange={this.handleFileChange}
                                        />
                                        {formErrors['panPhoto'] && (
                                            <span className='invalid-message'>{formErrors['panPhoto']}</span>
                                        )}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type={'text'}
                                        label={'Bank Name'}
                                        name={'bankName'}
                                        placeholder={'Enter your Bank Name'}
                                        value={kycFormData.bankName}
                                        error={formErrors['bankName']}
                                        onInputChange={(name, value) => kycChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <Input
                                        type={'text'}
                                        label={'Account Number'}
                                        name={'accountNumber'}
                                        placeholder={'Enter your Account Number'}
                                        value={kycFormData.accountNumber}
                                        error={formErrors['accountNumber']}
                                        onInputChange={(name, value) => kycChange(name, value)}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs='12' md='6'>
                                    <Input
                                        type={'text'}
                                        label={'IFSC Code'}
                                        name={'ifscCode'}
                                        placeholder={'Enter your IFSC Code'}
                                        value={kycFormData.ifscCode}
                                        error={formErrors['ifscCode']}
                                        onInputChange={(name, value) => kycChange(name, value)}
                                    />
                                </Col>
                                <Col xs='12' md='6'>
                                    <div className='input-box'>
                                        <label>Cancel Cheque / Bank Statement</label>
                                        <input
                                            type='file'
                                            name='cancelCheque'
                                            accept='image/*,.pdf'
                                            className='input-text'
                                            onChange={this.handleFileChange}
                                        />
                                        {formErrors['cancelCheque'] && (
                                            <span className='invalid-message'>{formErrors['cancelCheque']}</span>
                                        )}
                                    </div>
                                </Col>
                            </Row>

                            <hr />
                            <div className='profile-actions'>
                                <Button
                                    type='submit'
                                    variant='secondary'
                                    text={isLoading ? 'Saving...' : 'Submit KYC'}
                                />
                            </div>
                        </form>
                    </div>
                </SubPage>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        kycFormData: state.kyc.kycFormData,
        formErrors: state.kyc.formErrors,
        isLoading: state.kyc.isLoading
    };
};

export default connect(mapStateToProps, actions)(Kyc);
