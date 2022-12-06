import * as React from 'react'


const RoundDisplay = ({ banner, img, children }) => {
    return (
        <div className='imgDiv'>
            {img}
            <div className="imgBanner">
                <h4 className='bannerMsg'>{banner}</h4>
            </div>
            {children}
        </div>
    )
}

export default RoundDisplay