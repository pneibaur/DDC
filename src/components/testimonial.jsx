import * as React from "react"
import { Carousel, Col, Row } from "react-bootstrap"

const Testimonial = () => {
    return (
        <Row className="justify-content-md-center">
            <h3 className="display-4"><strong> TESTIMONIALS</strong></h3>
            <br /><hr /><br />
            <Col xs="12" md="6">
                <Carousel nextIcon="" prevIcon="" className="testimonyCarousel">
                    <Carousel.Item>
                        <div className="testimonial">
                            <h4>First</h4>
                            <p><i>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </i></p>
                            <p> - Quote Person</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial">
                            <h4>Second</h4>
                            <p><i>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </i></p>
                            <p> - Quote Person</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial">
                            <h4>Third</h4>
                            <p><i>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </i></p>
                            <p> - Quote Person</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    )
}

export default Testimonial