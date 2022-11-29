import * as React from "react"
import { Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import RoundDisplay from "./circleImg"
import { StaticImage } from "gatsby-plugin-image"
import 'react-multi-carousel/lib/styles.css'

const Specialties = () => {
    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },

    }
    return (
        <Row>
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div>
                    <RoundDisplay
                        img={<StaticImage src="../images/stockImages/depressionByDevAsangbam.jpg" alt='texter' className='roundDisplay' />}
                        banner={"ANXIETY"}>
                    </RoundDisplay>
                </div>
                <div>
                    <RoundDisplay
                        img={<StaticImage src="../images/stockImages/groupRecoveryByAdriannaGeo.jpg" alt='texter' className='roundDisplay' />}
                        banner={"ADDICTION"}>
                    </RoundDisplay>
                </div>
                <div>
                    <RoundDisplay
                        img={<StaticImage src="../images/stockImages/familyHandsByLuanaAzevedo.jpg" alt='texter' className='roundDisplay' />}
                        banner={"FAMILIES"}>
                    </RoundDisplay>
                </div>
                <div>
                    <RoundDisplay
                        img={<StaticImage src="../images/stockImages/teenagersByAedrian.jpg" alt='texter' className='roundDisplay' />}
                        banner={"TEENAGERS"}>
                    </RoundDisplay>
                </div>
                <div>
                    <RoundDisplay
                        img={<StaticImage src="../images/stockImages/confidenceByElizeuDias.jpg" alt='texter' className='roundDisplay' />}
                        banner={"SELF ESTEEM"}>
                    </RoundDisplay>
                </div>
                <div>
                    <RoundDisplay
                        img={<StaticImage src="../images/stockImages/depressionByGadielLazcano.jpg" alt='texter' className='roundDisplay' />}
                        banner={"DEPRESSION"}>
                    </RoundDisplay>
                </div>
            </Carousel>
        </Row >
    )
}

export default Specialties