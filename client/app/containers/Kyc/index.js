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
    componentDidMount() {
        this.props.fetchKyc();
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.submitKyc();
    };

    handleFileChange = e => {
        this.props.kycChange(e.target.name, e.target.files[0]);
    };

    getStatusBadge(status) {
        if (!status) return null;
        let className = 'kyc-status-badge ';
        if (status === 'Approved') className += 'badge-success';
        else if (status === 'Rejected') className += 'badge-danger';
        else className += 'badge-warning';

        return (
            <div className={`alert ${status === 'Approved' ? 'alert-success' : status === 'Rejected' ? 'alert-danger' : 'alert-warning'} mb-4`}>
                <strong>KYC Status:</strong> {status}
            </div>
        );
    }

    render() {
        const { kycFormData, kyc, formErrors, kycChange, isLoading } = this.props;
        const isSubmitted = kyc && kyc.status;

        return (
            <div className='kyc'>
                <SubPage title={'KYC Details'} isMenuOpen={null}>
                    {isSubmitted && this.getStatusBadge(kyc.status)}

                    {(isSubmitted === 'Waiting Approval' || isSubmitted === 'Approved') ? (
                        <div className='kyc-details mb-4'>
                            <h5 className='mb-3'>Submitted KYC Details</h5>
                            <Row>
                                <Col xs='12' md='6'>
                                    <p><strong>Aadhar Number:</strong> {kyc.aadharNumber || '-'}</p>
                                </Col>
                                <Col xs='12' md='6'>
                                    <p><strong>Aadhar Photo:</strong> {kyc.aadharPhoto ? <a href={kyc.aadharPhoto} target='_blank' rel='noopener noreferrer'>View</a> : '-'}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='12' md='6'>
                                    <p><strong>PAN Number:</strong> {kyc.panNumber || '-'}</p>
                                </Col>
                                <Col xs='12' md='6'>
                                    <p><strong>PAN Photo:</strong> {kyc.panPhoto ? <a href={kyc.panPhoto} target='_blank' rel='noopener noreferrer'>View</a> : '-'}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='12' md='6'>
                                    <p><strong>Bank Name:</strong> {kyc.bankName || '-'}</p>
                                </Col>
                                <Col xs='12' md='6'>
                                    <p><strong>Account Number:</strong> {kyc.accountNumber || '-'}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='12' md='6'>
                                    <p><strong>IFSC Code:</strong> {kyc.ifscCode || '-'}</p>
                                </Col>
                                <Col xs='12' md='6'>
                                    <p><strong>Cancel Cheque:</strong> {kyc.cancelCheque ? <a href={kyc.cancelCheque} target='_blank' rel='noopener noreferrer'>View</a> : '-'}</p>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    ) :
                        <div className='kyc-form'>
                            <h5 className='mb-3'>{isSubmitted ? 'Update KYC' : 'Submit KYC'}</h5>
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
                                        text={isLoading ? 'Saving...' : isSubmitted ? 'Update KYC' : 'Submit KYC'}
                                    />
                                </div>
                            </form>
                        </div>
                    }

                </SubPage>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        kycFormData: state.kyc.kycFormData,
        kyc: state.kyc.kyc,
        formErrors: state.kyc.formErrors,
        isLoading: state.kyc.isLoading
    };
};

export default connect(mapStateToProps, actions)(Kyc);
