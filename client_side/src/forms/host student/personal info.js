import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import '../formstyle/formstyles.css'

function Personal({ formData, setFormData, setPage }) {

    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        console.log(formData)
    };

    return (
        <>
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Personal Info</Col>
                            <Col sm-4 >Academic Info</Col>
                            <Col sm-4 >Submit</Col>
                        </Row>
                        <Row><ProgressBar now={33.33} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} /></Row>
                    </Row>
                    <form onSubmit={handleFormSubmit}>
                        <Row className='d-flex justify-content-around'>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Name</h><input className='mt-1 p-1 shadows' required value={formData.Name}
                                onChange={(e) => {
                                    setFormData({ ...formData, Name: e.target.value });
                                }} /></Col>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Date of Birth</h><input className='mt-1 p-1 shadows' required value={formData.DateofBirth}
                                onChange={(e) => {
                                    setFormData({ ...formData, DateofBirth: e.target.value });
                                }} /></Col>
                        </Row>
                        <Row className='d-flex justify-content-around'>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>Phone Number</h><input className='mt-1 p-1 shadows' required value={formData.phonenumber}
                                onChange={(e) => {
                                    setFormData({ ...formData, phonenumber: e.target.value });
                                }}/></Col>
                            <Col lg={4} xs={12} className='d-flex flex-column mt-4'><h>E-Mail</h><input className='mt-1 p-1 shadows' required value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                }} /></Col>
                        </Row>
                        <div className="mt-5 mb-5 w-100 d-flex justify-content-center">
                            <div className="w-75 d-flex justify-content-between">

                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { navigate('/dashboard') }}>
                                    Back
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

export default Personal;
