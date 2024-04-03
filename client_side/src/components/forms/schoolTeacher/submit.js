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
                            <Col sm-4 >Personal Info</Col>
                            <Col sm-4 >Academic Info</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Submit</Col>
                        </Row>
                        <ProgressBar now={100} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} />
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center formscroll'>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Teacher Name</h><p className='mt-1 p-1 shadows inwidth' >{formData.TeacherName}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Date of Birth</h><p className='mt-1 p-1 shadows inwidth' >{formData.DateofBirth}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Phone Number</h><p className='mt-1 p-1 shadows inwidth' >{formData.phonenumber}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Email</h><p className='mt-1 p-1 shadows inwidth' >{formData.email}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Address</h><p className='mt-1 p-1 shadows inwidth' >{formData.Address}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Teacher ID</h><p className='mt-1 p-1 shadows inwidth' >{formData.TeacherID}</p></Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Institute Name</h><p className='mt-1 p-1 shadows inwidth' >{formData.InstituteName}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>UDISE Code</h><p className='mt-1 p-1 shadows inwidth' >{formData.UDISECode}</p></Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex justify-content-between bwidth">
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