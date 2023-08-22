import * as React from 'react'
import { Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import videoLibrary from './videoLibrary';


const VideoCarousel = ({ deviceType, children }) => {

    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3001 },
            items: 1,
            partialVisibilityGutter: 90,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1025 },
            items: 1,
            partialVisibilityGutter: 90,
        },
        tablet: {
            breakpoint: { max: 1024, min: 465 },
            items: 1,
            partialVisibilityGutter: 90,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 1,
        },
    }

    const videos = videoLibrary
    console.log(videos.video01)

    return (
        <>
            <Row className='videoRow'>
                <br />
                <Carousel
                    responsive={responsive}
                    deviceType={deviceType}
                    arrows={true}
                    centerMode={true}
                    infinite={true}
                    pauseOnHover={true}
                    draggable={true}
                    swipeable={true}
                    focusOnSelect={true}
                    autoPlay={false}
                    itemClass='resourceVideo'
                    containerClass='videoCarousel'
                >
                    {
                        videos.map(node => (
                            <div>
                                <iframe
                                    src={`https://www.youtube.com/embed/${node.link}`}
                                    title={node.title}
                                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                    frameborder="0"
                                    webkitallowfullscreen="true"
                                    mozillaallowfullscreen="true"
                                    allowFullScreen
                                />
                            </div>
                        ))
                    }
                </Carousel>
            </Row>
        </>
    )
}

export default VideoCarousel