import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const RoundDisplay = ({ banner }) => {
    return (
        <div className='imgDiv'>
            <StaticImage src='../images/brandonGreenWasatchForest.jpeg' alt='texter' className='roundDisplay' />
            <div className="imgBanner">
                <h4>{banner}</h4>
            </div>
        </div>
    )
}

export default RoundDisplay