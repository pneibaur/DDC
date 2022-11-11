import * as React from 'react'


const RoundDisplay = ({ banner, img }) => {
    return (
        <div className='imgDiv'>
            {img}
            <div className="imgBanner">
                <h4>{banner}</h4>
            </div>
        </div>
    )
}

export default RoundDisplay