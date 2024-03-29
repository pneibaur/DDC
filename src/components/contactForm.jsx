import * as React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const ContactForm = () => {

    // const [newForm, setNewForm] = React.useState({
    //     name: "",
    //     email: "",
    //     inquiryMessage: "",
    // });

    // const handleChange = (event) => {
    //     setNewForm({ ...newForm, [event.target.name]: event.target.value})
    // };

    // const handleSubmit = (event) => {
    //     alert("A value was submitted: " + this.state.value)
    //     event.preventdefault();

    //     const contactForm = event.target;
    //     const formData = new FormData(contactForm);

    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString(),
    //     }).then(() => navigate("/thank-you")).catch((error) => alert(error));
    //     console.log("this is event: ", event)
    // };


    return (
        <div className='contactFormDiv'>
            <Container>
                <Row>
                    <h4>SEND ME A MESSAGE</h4>
                </Row>
                <hr /><br />
                <Row>
                    <form
                        name="contactDrew"
                        method="POST"
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                        // data-netlify-recaptcha="true"
                        action="/thank-you"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contactDrew" />
                        <input type="hidden" name="subject" value="inquiry from DrewDavisCounseling.com" />
                        <Row>
                            <Col>
                                <div className="Form-Group">
                                    <label htmlFor="firstLast" >Name</label>
                                    <input type="text" id="firstLast" name="firstLast" placeholder="First & Last Name" className="contactForm form-control" />
                                </div>
                            </Col>
                            <Col>
                                <div className="text-left form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control contactForm" placeholder="someone@example.com" />
                                </div>
                            </Col>
                        </Row> <br />
                        <Row>
                            <Col>
                            <div className="form-group">
                                <label htmlFor="inquiryMessage">Tell me how I can help:</label>
                                <textarea name="inquiryMessage" id="inquiryMessage" className="form-control contactForm" rows="3" placeholder="Do not include any personal or sensitive information." ></textarea>
                            </div>
                            </Col>
                        </Row> <br />
                        <Row className="justify-content-md-start">
                            <Col xs={2}>
                                <button className="btn btn-primary" type="submit">Submit</button>
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