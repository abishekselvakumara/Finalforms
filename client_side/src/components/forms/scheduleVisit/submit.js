import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'

function Submit({ formData, setFormData, setPage }) {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Submitted")
    };

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 >Details</Col>
                            <Col sm-4 >Accommodation</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Submit</Col>
                        </Row>
                        <ProgressBar now={100} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} />
                    </Row>
                    <form onSubmit={handleFormSubmit}>
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Date of visit</h><p className='mt-1 p-1 shadows inwidth' >{formData.DateofVisit}</p></Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>In-Time</h><p className='mt-1 p-1 shadows inwidth' >{formData.InTime}</p></Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Purpose</h><p className='mt-1 p-1 shadows inwidth' >{formData.Purpose}</p></Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>No. of Visitors</h><p className='mt-1 p-1 shadows inwidth' >{formData.Visitors}</p></Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Accommodation</h><p className='mt-1 p-1 shadows inwidth' >{formData.Accommodation}</p></Col>
                                    {formData.Accommodation === 'Yes' && (
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>No. of Days</h><p className='mt-1 p-1 shadows inwidth' >{formData.NoOfDays}</p></Col>)}
                                </Row>
                            </div>
                            <div className='formdata'>
                            {formData.Accommodation === 'Yes' && (
                                <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Check in Date and Time</h><p className='mt-1 p-1 shadows inwidth' >{formData.inTime}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Check out Date and Time</h><p className='mt-1 p-1 shadows inwidth' >{formData.outTime}</p></Col>
                                </Row>)}
                            </div>
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className="mb-5 d-flex flex-row-reverse justify-content-between bwidth">
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Submit
                                </button>
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { setPage(1) }}>
                                    Previous
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>

        </>
    )
}

export default Submit;