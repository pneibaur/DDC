import * as React from "react"
import { Col, Row } from "react-bootstrap"
import "../styles/squareDisplay.scss"

const SqDisplay = ({ children, img, banner, link }) => {
    return (
        <>
            <Col xs={12} md={4}>
                <Row className="justify-content-center">
                    <a className="squareLink" href="/servicesInfo">
                        <div className="squareDiv">
                            {img}
                            <div className="squareBanner"><h4>{banner}</h4></div>
                            {children}
                        </div>
                    </a>
                </Row>
            </Col>
        </>
    )
}

export default SqDisplay