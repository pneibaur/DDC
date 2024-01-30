import * as React from 'react'
import { Container, Row } from 'react-bootstrap'

const ContactMe = () => {
    return (
        <div className="contactMe">
            <Container>
                <Row>
                    <h4>CONTACT ME</h4>
                </Row>
                <hr /><br />
                <Row className='contactMeRow'>
                </Row>
                <ul className='contactMeList'>
                    <li>
                        <span className="material-symbols-rounded icons">mail</span> <i> thrivingmh@gmail.com</i>
                    </li>
                    <li>
                        <span className="material-symbols-rounded icons">call</span> 801-810-5214
                    </li>
                    <li>
                        <span className="material-symbols-rounded icons">pin_drop</span> 870 West Center St., Orem, UT 84057
                    </li>
                </ul>
                <Row>
                    <hr />
                    <div>
                        <span>
                            &copy; <span className='siteTitle'>Thriving Mental Health</span> | All rights reserved
                        </span>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default ContactMe