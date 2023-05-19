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
                    <form 
                    method='POST' 
                    name='contactDrew' 
                    data-netlify="true" 
                    netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                    >
                        <input type="hidden" name='bot-field'/>
                        <input type="hidden" name='form-name' value="contactDrew" />
                        <input type="hidden" name='subject' value='inquiry from DrewDavisCounseling.com' />
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
                                <div data-netlify-recaptcha="true"></div>
                                <Button variant='info' type='submit'>Submit</Button>
                            </Col>
                        </Row>
                        <br />
                    </form>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm