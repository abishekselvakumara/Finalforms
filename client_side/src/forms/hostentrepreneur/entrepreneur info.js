import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../formstyle/formstyles.css'

function YourComponent({ formData, setFormData, setPage }) {
    const [fileError, setFileError] = useState(false);
    const navigate = useNavigate();

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!formData.Proof) {
            setFileError(true);
            return;
        }
        setFileError(false);
        setPage(1);
        console.log(formData);
    };

    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Entrepreneur Info</Col>
                            <Col sm-4 style={{ opacity: '0.5' }}>Entrepreneur region</Col>
                            <Col sm-4 style={{ opacity: '0.5' }}>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={33.33} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center' >
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Industry Name</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='IndustryName' required value={formData.IndustryName} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Phone Number</h>
                                    <input className='mt-1 p-1 shadows inwidth' type="tel" pattern='[0-9]{10}' title='Enter Valid 10 Digit Number' name='phonenumber' required value={formData.phonenumber} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>E-Mail</h>
                                    <input className='mt-1 p-1 shadows inwidth' type='email' name='email' required value={formData.email} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Website</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='Website' type='link' required value={formData.website} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-Start'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 position-relative'>
                                    <h>Proof of Registration/Certificate as start-up</h>
                                    <div className='position-relative'>
                                        <label htmlFor="proofUpload" className="btn btn-primary mt-1 p-1 shadows inwidth" style={{ backgroundColor: '#fff', color: '#000', cursor: 'pointer' }}>
                                            Choose File
                                            <input id="proofUpload" type="file" name="Proof" className="d-none" required onChange={getinput} />
                                        </label>
                                        <button className="btn btn-success p-2 ps-4 pe-4 border-0 rounded-3 autof position-absolute end-0" autoFocus style={{ backgroundColor: '#EF6C1B', color: '#fff', top: '50%', transform: 'translateY(-50%)' }} type="submit">
                                            Upload
                                        </button>
                                    </div>
                                    {fileError && <p style={{ color: 'red' }}>You didn't upload anything.</p>}
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex justify-content-between bwidth" >
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} onClick={() => { navigate('/dashboard') }}>
                                    Back
                                </button>
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3 autof"                                autoFocus style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Next
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    );
}

export default YourComponent;

