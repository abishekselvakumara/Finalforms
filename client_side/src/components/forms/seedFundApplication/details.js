import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../../assets/styles/formStyles.css'
// import Form from 'react-bootstrap/Form';

function Academic({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 >Details</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Description</Col>
                            <Col sm-4 style={{ opacity:'0.5' }}>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={66.66} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center formscroll' >
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Name</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='FacultyName' required value={formData.FacultyName} onChange={getinput} /></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Designation</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='Designation' required value={formData.Designation} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Department</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='Department' required value={formData.Department} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Email</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='Email' required value={formData.Email} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Mobile Number</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='MobileNumber' required value={formData.MobileNumber} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Project Title</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='Title' required value={formData.Title} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Domain</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='Domain' required value={formData.Domain} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'>
                                    <h>Mentor Email</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='Department' required value={formData.Email} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex flex-row-reverse justify-content-between bwidth ">
                            <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Next
                                </button>
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { setPage(0) }}>
                                    Previous
                                </button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div >
        </>
    )
}

export default Academic;