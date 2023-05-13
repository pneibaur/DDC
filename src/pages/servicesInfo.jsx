import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Container, Card } from 'react-bootstrap'
// import { StaticImage } from 'gatsby-plugin-image'
import "../styles/about.scss"

const servicesInfo = () => {
    return (
        <Layout>
            <Container>
                <br />
                <Row className='aboutTitle'>
                    <Col>
                        <h3 className='display-4'><strong>Additional Information</strong></h3>
                    </Col>
                </Row>
                {/* <hr /> <br /> */}
                <Row>
                    <Col xs={12} md={4}>
                        <Card className="EMDR_Card" >
                            <Card.Body>
                                <Card.Title>
                                    <span>EMDR</span>
                                </Card.Title>
                                <div className="EMDR_info">
                                    <p>
                                    EMDR (Eye Movement Desensitization and Reprocessing) is a specialized therapeutic intervention 
                                    that addresses the root cause of many mental health challenges/diagnosis 
                                    through stimulation of the brains natural processes utilizing bilateral stimulation. 
                                    </p>
                                    <p><a href="https://www.emdria.org/about-emdr-therapy/">
                                        Read more about it here
                                    </a></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='DBT_Card'>
                            <Card.Body>
                                <Card.Title>DBT</Card.Title>
                                <div className="DBT_info">
                                    <p>
                                        Dialectical behavior therapy(DBT) is an evidence-based modality
                                        that can be useful in treating mood disorders, anxiety, and suicidal ideation,
                                        as well as for changing behavioral patterns such as self-harm and substance use.
                                    </p>
                                    <p><a href="https://www.webmd.com/mental-health/dialectical-behavioral-therapy">
                                        Read more about it here
                                    </a></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='Neurofeedback_Card'>
                            <Card.Body>
                                <Card.Title>Neurofeedback</Card.Title>
                                <div className="Neurofeedback_info">
                                    <p>
                                        Neurofeedback is direct training of brain function,
                                        by which the brain learns to function more efficiently.
                                        We observe the brain in action from moment to moment.
                                        We show that information back to the person.
                                        And we reward the brain for changing its own activity to more appropriate patterns.
                                        This is a gradual learning process.
                                        It applies to any aspect of brain function that we can measure.
                                    </p>
                                    <p><a href="http://www.eeginfo.com/what-is-neurofeedback.jsp">
                                        Read more about it here
                                    </a></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default servicesInfo