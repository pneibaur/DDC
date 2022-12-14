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
                                “Drew was a great therapist, 
                                he builds a great connection with the patient before getting into 
                                the nitty gritty of therapy. Whenever I would have session 
                                I genuinely knew that he was in my corner and wanted the best for me”.
                                </i></p>
                                <p> - Anonymous Client</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial">
                                <p><i>
                                "When I brought my son to Drew, 
                                he was in a deep depression, cutting and suicidal.  
                                Drew listened to him, got to the heart of his problems, 
                                and helped pull him out of his isolation and loneliness. 
                                Drew uses humor and wisdom as he connects with my son. 
                                My momma heart can never thank him enough. 
                                He brought my son back to us."
                                </i></p>
                                <p> - Anonymous Parent</p>
                            </div>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <div className="testimonial">
                                <p><i>
                                    This will also be a testimonial later down the road.
                                    For now, this is filler text to show what this testimonial section looks like.
                                </i></p>
                                <p> - Third Person</p>
                            </div>
                        </Carousel.Item> */}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonial