import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../style/style.css'

function Home() {
  return (
    <>
      <div>
        <Navbar expand="lg" >
          <Container fluid >
            <Navbar.Brand className='m navfont'>Logo Logo Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" w-100 justify-content-end">
                <Nav.Link href='/#' className="me-5 navfont">Home</Nav.Link>
                <Nav.Link href='#' className="me-5 navfont">About</Nav.Link>
                <Nav.Link href='#' className="me-5 navfont">Blog</Nav.Link>
                <Nav.Link href='#' className="me-5 navfont">AICTE</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Home;