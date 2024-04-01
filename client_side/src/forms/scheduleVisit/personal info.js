import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../formstyle/formstyles.css'
import Form from 'react-bootstrap/Form';

function Personal({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    const today = new Date().toISOString().split('T')[0];


    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Details</Col>
                            <Col sm-4 style={{ opacity: '0.5' }}>Accommodation</Col>
                            <Col sm-4 style={{ opacity: '0.5' }}>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={33.33} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit}  >
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>Date of visit</h>
                                        <Form.Control className='mt-1 p-1 shadows inwidth' type='date' min={today} max="2050-01-01" name='DateofVisit' required value={formData.DateofVisit} onChange={getinput}  />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>In-Time</h>
                                        <Form.Control className='mt-1 p-1 shadows inwidth' type='time' name='InTime' required value={formData.InTime} onChange={getinput}  />
                                    </Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>Purpose</h>
                                        <input className='mt-1 p-1 shadows inwidth' type="text" name='Purpose' required value={formData.Purpose} onChange={getinput}  />
                                    </Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                        <h>No. of Visitors</h>
                                        <input className='mt-1 p-1 shadows inwidth' type='text' name='Visitors' required value={formData.Visitors} onChange={getinput}  />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className=" mb-5 d-flex flex-row-reverse justify-content-between bwidth" >                                
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3 " style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Next
                                </button>
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { navigate('/dashboard') }}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Personal;
