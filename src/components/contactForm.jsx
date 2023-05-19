import { navigate } from 'gatsby';
import * as React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const ContactForm = () => {

    const [newForm, setNewForm] = React.useState({
        name: "",
        email: "",
        inquiryMessage: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value})
        console.log(setNewForm)
    };

    const handleSubmit = (event) => {
        event.preventdefault();

        const contactForm = event.target;
        const formData = new FormData(contactForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        }).then(() => navigate("/thank-you")).catch((error) => alert(error));
    };


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
                        // netlify-honeypot="bot-field"
                        data-netlify-recaptcha="true"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name='bot-field' />
                        <input type="hidden" name='form-name' value="contactDrew" />
                        <input type="hidden" name='subject' value='inquiry from DrewDavisCounseling.com' />
                        <Row>
                            <Col>
                                <div className="Form-Group">
                                    <label htmlFor='name' >Name</label>
                                    <input type="text" id='name' name='name' placeholder='First & Last Name' className='contactForm form-control' onSubmit={handleChange}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control contactForm" placeholder='someone@example.com' onSubmit={handleChange} />
                                </div>
                            </Col>
                        </Row> <br />
                        <Row>
                            <Col>
                            <div className="form-group">
                                <label htmlFor="inquiryMessage">Tell me how I can help:</label>
                                <textarea name="inquiryMessage" id="inquiryMessage" className='form-control contactForm' rows="3" placeholder='Do not include any personal or sensitive information.' onSubmit={handleChange} ></textarea>
                            </div>
                            </Col>
                        </Row> <br />
                        <Row className='justify-content-md-start'>
                            <Col xs={2}>
                                <button className='btn btn-primary' type='submit'>Submit</button>
                            </Col>
                            <Col xs={2}>
                                <div data-netlify-recaptcha="true"></div>
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