import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../formstyle/formstyles.css'
import Form from 'react-bootstrap/Form';

function Academic({ formData, setFormData, setPage }) {

    const getinput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(2);
        console.log(formData)
    };

    return (
        <>
            <div >
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 >Personal Info</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Academic Info</Col>
                            <Col sm-4 style={{ opacity:'0.5' }}>Submit</Col>
                        </Row>
                        <Row><ProgressBar now={66.66} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit} className='w-100 d-flex flex-column align-items-center' >
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Student ID</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='StudentID' required value={formData.StudentID} onChange={getinput} /></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Programme</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.programme} name='programme' onChange={getinput}>
                                        <option value=''>Select Programme</option>
                                        <option value="Undergraduate">Undergraduate</option>
                                        <option value="Postgraduate">Postgraduate</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Course</h>
                                    <input  className='mt-1 p-1 shadows inwidth' name='course' required value={formData.course} onChange={getinput} />
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Semester</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.semester} name='semester' onChange={getinput}>
                                        <option value=''>Select Semester</option>
                                        <option value="One">1</option>
                                        <option value="Two">2</option>
                                        <option value="Three">3</option>
                                        <option value="Four">4</option>
                                        <option value="Five">5</option>
                                        <option value="Six">6</option>
                                        <option value="Seven">7</option>
                                        <option value="Eight">8</option>
                                        <option value="Nine">9</option>
                                        <option value="Ten">10</option>
                                        <option value="Seven">11</option>
                                        <option value="Eight">12</option>
                                        <option value="Nine">13</option>
                                        <option value="Ten">14</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </div>
                        <div className='formdata'>
                            <Row className='d-flex justify-content-between'>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Year of Studying</h>
                                    <Form.Select className='mt-1 p-1 shadows inwidth' required value={formData.yearofstudy} name='yearofstudy' onChange={getinput}>
                                        <option value=''>Select Year</option>
                                        <option value="I">I</option>
                                        <option value="II">II</option>
                                        <option value="III">III</option>
                                        <option value="IV">IV</option>
                                        <option value="V">V</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'>
                                    <h>Year of Graduation</h>
                                    <input className='mt-1 p-1 shadows inwidth' name='yearofgraduate' required value={formData.yearofgraduate} onChange={getinput} />
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="d-flex justify-content-between bwidth ">
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { setPage(0) }}>
                                    Previous
                                </button>
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Next
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