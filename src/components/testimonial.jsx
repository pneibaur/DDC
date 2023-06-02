import * as React from "react"
import { Card, Row, Container } from "react-bootstrap"
import Carousel from "react-multi-carousel"

const Testimonial = ({ deviceType }) => {

    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3001 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1025 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 465 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <Container>
            <br />
            <Row>
                <Carousel
                    deviceType={deviceType}
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    partialVisbile={false}
                    itemClass="multi-carousel-item"
                >
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                    <div>
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
                    </div>
                    <div>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>FROM A CLIENT</Card.Title>
                                <div className="">
                                    <p><i>
                                        “When I say Drew is the best, I really mean that Drew is the best. 
                                        He is the kind of person that radiates love, compassion, understanding, 
                                        concern, and so many more unique qualities that make a wonderful therapist.  
                                        Drew helps me understand the beliefs around my thoughts 
                                        which helps me regulate my emotions when I encounter triggers. 
                                        I recommend Drew to literally everyone I know seeking help.”
                                    </i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>FROM A CLIENT</Card.Title>
                                <div className="">
                                    <p><i>
                                        “Drew is a therapist who cares about his clients. 
                                        He takes time to get to know you and never judges. 
                                        He is a great listener. He has helped me see situations in my life 
                                        from all perspectives, and with that, it has changed my outlook on life. 
                                        I will always be grateful for the help he has given me in my life.”
                                    </i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="">
                            <Card.Body>
                                <Card.Title>FROM A CLIENT</Card.Title>
                                <div className="">
                                    <p><i>
                                        “I am excited to share my heartfelt testimonial for Drew. 
                                        I was lost and struggling with depression, anxiety, and substance abuse. 
                                        Drew created a space where I felt safe due to his genuine nature and empathy towards me. 
                                        As I opened up and began to trust drew he challenged my negative thought patterns, 
                                        and I realized that he truly felt and understood what I had been going through 
                                        and could see a light at the end of the tunnel. Because I trusted drew, 
                                        I took his advice and practiced hard work, discipline and resiliency to accomplish my goals. 
                                        Through the hardships I have changed completely. I have the skills, tools and mindset 
                                        that will benefit me for the rest of my life. 
                                        He has left a lasting impact for the best and is my dear friend.  
                                        I would suggest Drew for any of your needs.”
                                    </i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel>
            </Row>
        </Container>
    )
}

export default Testimonial

