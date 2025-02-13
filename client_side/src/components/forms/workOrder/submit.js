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
            <div>
                <Container fluid>
                    <Row className='backg'>
                        <Row className='text-center align-items-center m-0 p-0' style={{ height: '8vh' }}>
                            <Col sm-4 >Details</Col>
                            
                            <Col sm-4 style={{ color: '#EF6C1B' }}>Submit</Col>
                        </Row>
                        <ProgressBar now={100} visuallyHidden className='p-0 m-0' style={{ height: '.75vh' }} />
                    </Row>
                    <form onSubmit={handleFormSubmit}>
                        <div className='w-100 d-flex flex-column align-items-center'>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'><h>JobWork</h><p className='mt-1 p-1 shadows inwidth' >{formData.JobWork}</p></Col>
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4'><h>Job Work Description</h><p className='mt-1 p-1 shadows inwidth' >{formData.JobWorkDescription}</p></Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'><h>Quantity</h><p className='mt-1 p-1 shadows inwidth' >{formData.Quantity}</p></Col>
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4'><h>Expected Date of Delivery</h><p className='mt-1 p-1 shadows inwidth' >{formData.ExpectedDate}</p></Col>
                                </Row>
                            </div>
                            <div className='formdata'>
                                <Row className='d-flex justify-content-between'>
                                
                                <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Raw Material Requirement</h><p className='mt-1 p-1 shadows inwidth' >{formData.RawMaterialRequirement}</p></Col>
                                {formData.RawMaterialRequirement === 'Yes' && (
                                    <Col lg={5} xs={12} className='d-flex flex-column mt-4 padding'><h>Details of Raw Material Requirement</h><p className='mt-1 p-1 shadows inwidth' >{formData.RawMaterial}</p></Col>)}
                                </Row>
                            </div>
                            
                        </div>
                        <div className="mt-5 w-100 d-flex justify-content-center">
                            <div className="mb-5 d-flex flex-row-reverse justify-content-between bwidth">
                                <button className="p-2 ps-4 pe-4 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }} type="submit">
                                    Submit
                                </button>
                                <button className="p-2 ps-3 pe-3 border-0 rounded-3" style={{ background: '#EF6C1B', color: '#fff' }}
                                    onClick={() => { setPage(0) }}>
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