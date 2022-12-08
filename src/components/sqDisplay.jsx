import * as React from "react"
import { Col, Row } from "react-bootstrap"
import "../styles/SquareDisplay.scss"

const SqDisplay = ({ children, img, banner }) => {
    return (
        <>
            <Col xs={12} md={4}>
                <Row className="justify-content-center">
                    <div className="squareDiv">
                        {img}
                        <div className="squareBanner"><h4>{banner}</h4></div>
                        {children}
                    </div>
                </Row>
            </Col>
        </>
    )
}

export default SqDisplay