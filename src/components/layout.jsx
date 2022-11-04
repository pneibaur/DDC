import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"
import { Container, Row, Navbar, Nav, Col } from "react-bootstrap";

const Layout = ({ children }) => {
    return (
        <>
            <Container>
                <header>
                    <Navbar className="navbar-custom" expand='sm'>
                        <Navbar.Brand href="#">Drew Davis Counseling</Navbar.Brand>
                        <Navbar.Toggle aria-controls="ddcNav" />
                        <Navbar.Collapse id="ddcNav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#">HOME</Nav.Link>
                                <Nav.Link href="#">ABOUT</Nav.Link>
                                <Nav.Link href="#">SERVICES</Nav.Link>
                                <Nav.Link href="#">SPECIALTIES</Nav.Link>
                                <Nav.Link href="#">CONTACT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </Container>
            <main>
                {children}
            </main>
            <Container fluid>
                <hr />
                <footer className="page-footer">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>
                            <h4>CONTACT FORM</h4>
                        </Col>
                        <Col xs={12} md={6}>
                            <h4>DREW CONTACT INFO</h4>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}

export default Layout