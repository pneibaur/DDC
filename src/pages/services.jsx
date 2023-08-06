import * as React from 'react'
import UAParser from "ua-parser-js"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Container } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import Specialties from "../components/specialties"
import SqDisplay from "../components/sqDisplay"
// import "../styles/about.scss"

const services = () => {

    const parser = new UAParser()
    const result = parser.getResult()
    const deviceType = (result.device && result.device.type) || "desktop"

    return (
        < Layout >
        <Seo Title={"Services"} />
            {/* SERVICES OFFERED */}
            <div id="services" className="welcomeSection services">
                <Container>
                    <br />
                    {/* services banner */}
                    <Row className="justify-content-around">
                        <h3 className="display-4"><strong> SERVICES</strong></h3>
                        <hr />
                    </Row>
                    {/* display images */}
                    <Row className="justify-content-center">

                        <SqDisplay
                            img={<StaticImage src="../images/stockImages/EMDR.png" alt='EMDR' className='squareDisplay' />}
                            banner="EMDR"
                        >
                            <div className="services-info">
                            </div>
                        </SqDisplay>

                        <SqDisplay
                            img={<StaticImage src="../images/stockImages/CBT.jpg" alt='Cognitive Behavioral Therapy' className='squareDisplay' />}
                            banner={"DBT"}>
                            <div className="services-info">
                            </div>
                        </SqDisplay>

                        <SqDisplay
                            img={<StaticImage src="../images/stockImages/neuroFeedback.jpg" alt='Neurofeedback' className='squareDisplay' />}
                            banner={"NEUROFEEDBACK"}>
                            <div className="services-info">
                            </div>
                        </SqDisplay>

                        <SqDisplay
                            img={<StaticImage src="../images/stockImages/sevenChallenges.png" alt='Seven Challenges' className='squareDisplay' />}
                            banner={" "}>
                            <div className="services-info">
                            </div>
                        </SqDisplay>

                    </Row>
                </Container>
            </div>
            {/* SPECIALTIES */}
            <div id="specialties" className="welcomeSection specialties">
                <Container>
                        <br />
                    <Row >
                        <h3 className="display-4"><strong> SPECIALTIES</strong></h3>
                        <hr />
                    </Row>
                    <Specialties deviceType={deviceType}></Specialties>
                </Container>
            </div>
        </Layout >
    )
}

export default services