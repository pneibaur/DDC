import React from "react";
import ContactForm from "./contactForm";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"
import { Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ContactMe from "./contactMe";

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout ddc-nav">
                <Container>
                    <header>
                        <Navbar className="navbar-custom" expand='sm'>
                            <Navbar.Brand href="/">
                                <StaticImage width={200} src="../images/ddcMountainLogo.png" alt="DDC Logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="ddcNav" />
                            <Navbar.Collapse id="ddcNav" className="justify-content-end">
                                <Nav>
                                    <Nav.Item><Nav.Link href="/">HOME</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link href="/services">SERVICES</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link href="/about">ABOUT</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link href="/#contact">CONTACT</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link href="/additional">MORE</Nav.Link></Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                </Container>
            </div>
            <main>
                {children}
            </main>
            <div className="layout">
                <Container>
                    <footer id="contact" className="page-footer">
                        <br /><br />
                        <Row className="justify-content-center">
                            <Col xs={12} md={6}>
                                <ContactForm></ContactForm>
                            </Col>
                            <Col xs={12} md={6}>
                                <ContactMe></ContactMe>
                            </Col>
                        </Row>
                    </footer>
                </Container>
            </div>
        </>
    )
}

export default Layout