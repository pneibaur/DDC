import * as React from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <div className='contactFormDiv'>
            <Container>
                <Row>
                    <h4>SEND ME A MESSAGE</h4>
                </Row>
                <hr /><br />
                <Row>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className='contactForm'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder='First & Last Name' type='text' className='contactForm' />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className='contactForm'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder='someone@example.com' type='email' className='contactForm' />
                                </Form.Group>
                            </Col>
                        </Row> <br />
                        <Row>
                            <Col>
                                <Form.Group className='contactForm'>
                                    <Form.Label>Tell me how I can help:</Form.Label>
                                    <Form.Control placeholder='Your message here' as='textarea' rows={3} className='contactForm' />
                                </Form.Group>
                            </Col>
                        </Row> <br />
                        <Row className='justify-content-md-start'>
                            <Col xs={2}>
                                <Button variant='info' type='submit'>Submit</Button>
                            </Col>
                        </Row>
                        <br />
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm