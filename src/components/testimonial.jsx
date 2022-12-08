import * as React from "react"
import { Carousel, Col, Row, Container } from "react-bootstrap"

const Testimonial = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h3 className="display-4"><strong> TESTIMONIALS</strong></h3>
                <br /><hr /><br />
                <Col xs="12" md="6">
                    <Carousel variant="dark" className="testimonyCarousel">
                        <Carousel.Item>
                            <div className="testimonial">
                                <p><i>
                                    Right now there aren't any quotes in this carousel.
                                    But there soon will be!
                                </i></p>
                                <p> - First Person</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial">
                                <p><i>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </i></p>
                                <p> - Second Person</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial">
                                <p><i>
                                    This will also be a testimonial later down the road.
                                    For now, this is filler text to show what this testimonial section looks like.
                                </i></p>
                                <p> - Third Person</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonial