import * as React from 'react'

const ContactMe = () =>{
    return (
        <div className="contactMe">
            <h4>CONTACT ME</h4>
            <hr /><br />
            <ul className='contactMeList'>
                <li><span className="material-symbols-rounded icons">mail</span> <i> Drew.Davis.Counseling@gmail.com</i></li>
                <li><span className="material-symbols-rounded icons">call</span> 385-422-1904</li>
                <li><span className="material-symbols-rounded icons">pin_drop</span> 870 West Center St., Orem, UT 84057</li>
            </ul>
            <hr />
            <p>
                &copy; DDC | All rights reserved
            </p>
        </div>
    )
}

export default ContactMe