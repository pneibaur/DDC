import * as React from 'react'

const ContactMe = () =>{
    return (
        <div className="contactMe">
            <h4>CONTACT ME</h4>
            <br />
            <ul className='contactMeList'>
                <li><span className="material-symbols-rounded icons">mail</span> <i>some_email@gmail.com</i></li>
                <li><span className="material-symbols-rounded icons">call</span> 801-555-5555</li>
                <li><span className="material-symbols-rounded icons">apartment</span> 123 Fake St. Orem, UT, 84057</li>
            </ul>
            <hr />
            <p>
                &copy; DDC | All rights reserved
            </p>
        </div>
    )
}

export default ContactMe