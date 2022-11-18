import * as React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <>
            <h4>SEND ME A MESSAGE</h4>
            <br />
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
                <Row className='justify-content-md-end'>
                    <Col xs={2}>
                    <Button variant='info' type='submit'>Submit</Button>
                    </Col>
                </Row>
            </Form><br />
        </>
    )
}

export default ContactForm