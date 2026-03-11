/**
 *
 * KycForm
 *
 */

import React from 'react';
import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

const KycForm = props => {
    const { kycFormData, formErrors, kycChange, submitKyc, isLoading } = props;

    const handleSubmit = event => {
        event.preventDefault();
        submitKyc();
    };

    return (
        <div className='kyc-form'>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs='12' md='6'>
                        <Input
                            type={'text'}
                            label={'Aadhar Number'}
                            name={'aadharNumber'}
                            placeholder={'Enter Aadhar Number'}
                            value={kycFormData.aadharNumber}
                            error={formErrors.aadharNumber}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>
                    <Col xs='12' md='6'>
                        <Input
                            type={'file'}
                            label={'Aadhar Photo'}
                            name={'aadharPhoto'}
                            error={formErrors.aadharPhoto}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs='12' md='6'>
                        <Input
                            type={'text'}
                            label={'PAN Number'}
                            name={'panNumber'}
                            placeholder={'Enter PAN Number'}
                            value={kycFormData.panNumber}
                            error={formErrors.panNumber}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>
                    <Col xs='12' md='6'>
                        <Input
                            type={'file'}
                            label={'PAN Photo'}
                            name={'panPhoto'}
                            error={formErrors.panPhoto}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs='12' md='6'>
                        <Input
                            type={'text'}
                            label={'Bank Name'}
                            name={'bankName'}
                            placeholder={'Enter Bank Name'}
                            value={kycFormData.bankName}
                            error={formErrors.bankName}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>

                    <Col xs='12' md='6'>
                        <Input
                            type={'text'}
                            label={'Account Number'}
                            name={'accountNumber'}
                            placeholder={'Enter Account Number'}
                            value={kycFormData.accountNumber}
                            error={formErrors.accountNumber}
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
                            placeholder={'Enter IFSC Code'}
                            value={kycFormData.ifscCode}
                            error={formErrors.ifscCode}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>
                    <Col xs='12' md='6'>
                        <Input
                            type={'file'}
                            label={'Cancel Cheque'}
                            name={'cancelCheque'}
                            error={formErrors.cancelCheque}
                            onInputChange={(name, value) => kycChange(name, value)}
                        />
                    </Col>
                </Row>

                <hr />
                <div className='profile-actions'>
                    <Button type='submit' variant='secondary' text={isLoading ? 'Saving...' : 'Save KYC'} />
                </div>
            </form>
        </div>
    );
};

export default KycForm;
