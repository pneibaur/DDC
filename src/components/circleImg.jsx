import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


const CircleImg = ({ banner }) => {
    return (
        <div className='circleDiv'>
            <StaticImage src='../images/brandonGreenWasatchForest.jpeg' alt='texter' className='circleImg' />
            <div className="circleBanner">
                <h4>{banner}</h4>
            </div>
        </div>
    )
}

export default CircleImg