import * as React from "react"
import { Card, Col, Row, Container } from "react-bootstrap"

const Testimonial = () => {
    return (
        <Container>
            <br />
            <Row className="justify-content-md-center">
                <Col xs="12" md="4">
                    <Card className="">
                        <Card.Body>
                            <Card.Title>FROM A CLIENT</Card.Title>
                            <div className="">
                                <p><i>
                                    “Drew was a great therapist,
                                    he builds a great connection with the patient before getting into
                                    the nitty gritty of therapy. Whenever I would have session
                                    I genuinely knew that he was in my corner and wanted the best for me”.
                                </i></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    <Card className="">
                        <Card.Body>
                            <Card.Title>FROM A PARENT</Card.Title>
                            <div className="">
                                <p><i>
                                    "Our family had experienced the death of my children’s father and coming out of Covid,
                                    and we all needed help. It was particularly difficult to find a great therapist to work with my son,
                                    who was at a tricky time in his life as a teenager going through a lot of transitions
                                    holding on to overwhelming grief. Drew provided such a safe, open place for my son
                                    to be able to be himself and focus on a lot of different areas of his life,
                                    not just his grief. He was calm, knowledgeable, and professional, while also giving
                                    the kind of individualized help my son needed that gave him tools to move forward,
                                    hope, and encouragement. We are so grateful for him. "
                                </i></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    <Card className="">
                        <Card.Body>
                            <Card.Title>FROM A PARENT</Card.Title>
                            <div className="">
                                <p><i>
                                    "When I brought my son to Drew,
                                    he was in a deep depression, cutting and suicidal.
                                    Drew listened to him, got to the heart of his problems,
                                    and helped pull him out of his isolation and loneliness.
                                    Drew uses humor and wisdom as he connects with my son.
                                    My momma heart can never thank him enough.
                                    He brought my son back to us."
                                </i></p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Carousel variant="dark" className="testimonyCarousel">
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
                <Carousel.Item>
                    <div className="testimonial">
                        <p><i>
                        third carousel card. placeholder. 
                        </i></p>
                        <p> - Third Person</p>
                    </div>
                </Carousel.Item>
            </Carousel> */}
        </Container>
    )
}

export default Testimonial

