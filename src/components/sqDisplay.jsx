import * as React from "react"
import { Col, Row } from "react-bootstrap"
import "../styles/squareDisplay.scss"

const SqDisplay = ({ children, img, banner }) => {
    return (
        <>
            <Col xs={12} md={3}>
                <Row className="justify-content-center">
                    <a className="squareLink" href="/additional">
                        <div className="squareDiv">
                            {img}
                            <div className="squareBanner">
                                <h2>{banner}</h2>
                            </div>
                            {children}
                        </div>
                    </a>
                </Row>
            </Col>
        </>
    )
}

export default SqDisplay