import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"
import { Container, Row } from "react-bootstrap";

const Layout = ({ children }) => {
    return (
        <Container>
            <header>
                <nav>
                    <div>Drew Davis Counceling</div>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>SPECIALTIES</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </header>
            <hr />
            <main>
                <Row>
                    <hr />
                    {children}
                </Row>
            </main>
            <footer>
                <hr />
                <p>Footer for now</p>
            </footer>
        </Container>
    )
}

export default Layout