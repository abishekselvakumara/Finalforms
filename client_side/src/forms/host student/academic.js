import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Academic({ formData, setFormData, setPage }) {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(2);
        console.log(formData)
    };

    return (
        <>
            <div className='maina'>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 >Personal Info</Col>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Academic Info</Col>
                            <Col sm-4 >Submit</Col>
                        </Row>
                        <Row><ProgressBar now={66.66} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit}>
                        <Row className='d-flex justify-content-around'>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Register Number</h><input className='mt-1 p-1 shadows' required value={formData.registerno}
                                onChange={(e) => {
                                    setFormData({ ...formData, registerno: e.target.value });
                                }} /></Col>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Programme</h><input className='mt-1 p-1 shadows' required value={formData.programme}
                                onChange={(e) => {
                                    setFormData({ ...formData, programme: e.target.value });
                                }}/></Col>
                        </Row>
                        <Row className='d-flex justify-content-around'>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Course</h><input className='mt-1 p-1 shadows' required value={formData.course}
                                onChange={(e) => {
                                    setFormData({ ...formData, course: e.target.value });
                                }}/></Col>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Semester</h><input className='mt-1 p-1 shadows' required value={formData.semester}
                                onChange={(e) => {
                                    setFormData({ ...formData, semester: e.target.value });
                                }}/></Col>
                        </Row>
                        <Row className='d-flex justify-content-around'>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Year of Studying</h><input className='mt-1 p-1 shadows' required value={formData.yearofstudy}
                                onChange={(e) => {
                                    setFormData({ ...formData, yearofstudy: e.target.value });
                                }}/></Col>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Year of Graduation</h><input className='mt-1 p-1 shadows' required value={formData.yearofgraduate}
                                onChange={(e) => {
                                    setFormData({ ...formData, yearofgraduate: e.target.value });
                                }}/></Col>
                        </Row>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="w-75 d-flex justify-content-between">

                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
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
            </div>
        </>
    )
}

export default Academic;