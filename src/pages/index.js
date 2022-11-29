import * as React from "react"
import UAParser from "ua-parser-js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
import { StaticImage } from "gatsby-plugin-image"
import RoundDisplay from "../components/circleImg"
import Specialties from "../components/specialties"

const IndexPage = () => {

  const parser = new UAParser()
  const result = parser.getResult()
  const deviceType = (result.device && result.device.type) || "desktop"

  return (
    <Layout>
      <div className="welcome">
        <StaticImage className="welcomeImg" src="../images/stockImages/brandonGreenWasatchForest.jpeg" alt="Wasatch National Forest by Brandon Green" />
        <Container className="welcomeBanner">
          <Row>
            <Col xs={12}>
              <div>
                <h1 className="bannerTitle">Drew Davis Counseling</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="specialties" className="welcomeSection specialties">
        <Container>
          <hr />
          <Row >
            <h3 className="display-4"><strong> SPECIALTIES</strong></h3>
          </Row>
          <Specialties deviceType={deviceType}></Specialties>
        </Container>
      </div>
      <div id="services" className="welcomeSection services">
        <Container>
          <hr />
          <Row className="justify-content-end">
            <h3 className="display-4"><strong> SERVICES</strong></h3>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <RoundDisplay
                img={<StaticImage src="../images/stockImages/EMDR.jpg" alt='texter' className='roundDisplay' />}
                banner={"EMDR"}>
              </RoundDisplay>
            </Col>
            <Col xs={12} md={4}>
              <RoundDisplay
                img={<StaticImage src="../images/stockImages/CBT.jpg" alt='texter' className='roundDisplay' />}
                banner={"CBT"}>
              </RoundDisplay>
            </Col>
            <Col xs={12} md={4}>
              <RoundDisplay
                img={<StaticImage src="../images/stockImages/neuroFeedback.jpg" alt='texter' className='roundDisplay' />}
                banner={"NEURO FEEDBACK"}>
              </RoundDisplay>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="testimonials" className="welcomeSection testimonials">
        <Container>
          <Testimonial></Testimonial>
        </Container>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Home" />

export default IndexPage
