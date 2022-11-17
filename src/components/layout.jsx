import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"
import { Container, Row, Navbar, Nav, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links"
import ContactMe from "./contactMe";

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <Container>
                    <header>
                        <Navbar className="navbar-custom" expand='sm'>
                            <Navbar.Brand href="#">
                                <StaticImage width={100} src="../images/DDClogo.png" alt="DDC Logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="ddcNav" />
                            <Navbar.Collapse id="ddcNav" className="justify-content-end">
                                <Nav>
                                    <Nav.Link href="/">HOME</Nav.Link>
                                    <Nav.Link href="/about">ABOUT</Nav.Link>
                                    <Nav.Link><AnchorLink className="anchorLink" to="/#specialties"> SPECIALTIES</AnchorLink></Nav.Link>
                                    <Nav.Link><AnchorLink className="anchorLink" to="/#services" >SERVICES</AnchorLink></Nav.Link>
                                    <Nav.Link><AnchorLink className="anchorLink" to="/#contact"> CONTACT</AnchorLink></Nav.Link>
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
                    <hr />
                    <footer id="contact" className="page-footer">
                        <Row className="justify-content-center">
                            <Col xs={12} md={6}>
                                <h4>CONTACT FORM</h4>
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