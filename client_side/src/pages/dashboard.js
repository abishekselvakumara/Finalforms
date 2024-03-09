import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/style.css';

function Home() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

    return (
        <>
            <div className='sidebar'>
                <Navbar expand="lg" className='sidebar'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleOffcanvasToggle} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href='/#' className="me-5 text-white">Home</Nav.Link>
                                <Nav.Link href='#' className="me-5 text-white">About</Nav.Link>
                                <Nav.Link href='#' className="me-5 text-white">Blog</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link href='/#' className="text-white" onClick={handleOffcanvasToggle}>Home</Nav.Link>
                            <Nav.Link href='#' className="text-white" onClick={handleOffcanvasToggle}>About</Nav.Link>
                            <Nav.Link href='#' className="text-white" onClick={handleOffcanvasToggle}>Blog</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
}

export default Home;
