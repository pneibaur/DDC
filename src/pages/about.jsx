import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import "../styles/about.scss"

const About = () => {
    return (
        <Layout>
            <Seo Title={"About"} />
            <Container>
                <Row className='aboutTitle'>
                    <Col>
                        <h3 className='display-4'><strong> Drew Davis</strong></h3>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xs={12}>
                    <StaticImage style={{ maxWidth: 300 }} src='../images/Drew/profileDrew.jpeg' alt='Drew Davis Profile' />
                    </Col>
                </Row>
                <hr /> <br />
                <Row>
                    <Col xs={12} md={6}>
                        <Card className="bio" >
                            <Card.Body>
                                <Card.Title>
                                    <span>BIO</span>
                                </Card.Title>
                                <div className="bioAbout">
                                    <p>
                                        As a “dyed-in-the-wool” Buckeye drew loves his roots from Ohio.
                                        His fun-loving approach to life builds deep bonds that his students thrive on.
                                        As an accomplished pianist and singer,
                                        music is one of his passions and it surfaces in his approach to life,
                                        therapy and counseling.
                                    </p><p>
                                        Drew earned his
                                        Bachelor Degree in Social Work from Weber State University.
                                        Soon after, he earned his Masters Degree in
                                        Social Work from Brigham Young University, and he was ready to
                                        perform what he had practiced for so many years.
                                    </p><p>
                                        Using his extensive background with youth and family treatment
                                        in residential care, outpatient treatment,
                                        public education and numerous volunteer youth organizations he was
                                        ready and passionate about helping teens find hope.
                                    </p><p>
                                        With expertise in treating depression, anxiety,
                                        learning differences, processing differences and attachment
                                        disorders, as well as, EMDR certified trained,
                                        Drew has a deep well of experience to draw from.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='bio'>
                            <Card.Body>
                                <Card.Title>FROM A CLIENT</Card.Title>
                                <div className="testimonial">
                                    <p><i>
                                        “Drew has been a lifeline, a guide, and a support
                                        throughout my son’s time with him, and while always professional,
                                        has felt like a friend celebrating successes and supporting and
                                        encouraging me through challenges. Drew is skillful at combining
                                        his knowledge and intuition to know exactly how much to encourage
                                        and how much to push my son at any given time and in any given
                                        situation. He is incredibly responsive and always listened to and
                                        considered any concerns, questions, or suggestions that I had, and
                                        as a parent, knowing that you are being
                                        fully heard and listened to is invaluable. His guidance has helped my
                                        son to make incredible progress and growth, develop essential skills,
                                        and become more aware of his own strengths and challenges,
                                        and it has also helped me grow into a better person and parent.
                                        Thank you for everything!”
                                    </i></p>
                                    <p> - Parent</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
        </Layout>
    )
}

export default About
