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
                            <span className="material-symbols-rounded icons">mail</span> <i> Drew.Davis.Counseling@gmail.com</i>
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
                    <p>&copy; Drew Davis Counseling | All rights reserved</p>
                </Row>
            </Container>
        </div>
    )
}

export default ContactMe