import * as React from "react"
import { Col } from "react-bootstrap"
import "../styles/squareDisplay.scss"

const SqDisplay = ({ children, img, banner }) => {
    return (
        <>
            <Col xs={12} md={4}>
                <div className="squareDiv">
                    {img}
                    <div className="squareBanner"><h4>{banner}</h4></div>
                    {children}
                </div>
            </Col>
        </>
    )
}

export default SqDisplay