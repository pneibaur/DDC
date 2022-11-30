import * as React from "react"
import UAParser from "ua-parser-js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
import { StaticImage } from "gatsby-plugin-image"
import RoundDisplay from "../components/circleImg"
import Specialties from "../components/specialties"

// --------------------------------------------------
// TO DO:
// --------------------------------------------------
// 1. The mobile version: the services/specialties are off center. make them centered. 

// 2. make the form functional with an email service. 
//     - https://formspree.io/
//     - https://www.gatsbyjs.com/docs/building-a-contact-form/

// 3. the services images need to be hoverable/clickable
//     - when clicked/hovered, a darker transparent color slides "up", with a descriptive text of the item. 
//     - OR when hovered or clicked, the card "flips over" and reveals more info. 

// 4. create links to EMDR about, and Neurofeedback about. OR create some pages with quoted texts from each of these services? 

// 5. switch out the testimonial fake text with real ones once he gets them. 

// 7. switch the "home" link to an anchor link
// 8 resolve the error with anchor links. 
//     - I THINK it doesn't like Nav.Link combined with AnchorLink...
// --------------------------------------------------
// COMPLETE
// --------------------------------------------------
// - make the nav sticky so it's visible all the time. 
// - logo needs to be more classy
// - specialties must also include: teenagers, anxiety, trauma, self esteem, conflict resolution. 
// - remove FB photos. only keep the Telos one (see if there's a better quality photo)
// 6. Improve the welcome banner image and title: 
//     - switch the title with the logo
//     - add a placeholder slogan until Drew gets back to me. 
//     - make the image take up less initial space. skinnier overall. 

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
              <div className="bannerTitleDiv">
                <StaticImage className="bannerTitle" src="../images/ddcMountainLogo.png" alt="Drew Davis Counseling" />
                <br/>
                <br/>
                <h2 className="bannerTitle"><em><u>For growth, healing, & building a better self</u></em></h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="specialties" className="welcomeSection specialties">
        <Container>
          <Row >
            <h3 className="display-4"><strong> SPECIALTIES</strong></h3>
            <hr/>
          </Row>
          <Specialties deviceType={deviceType}></Specialties>
        </Container>
      </div>
      <div id="services" className="welcomeSection services">
        <Container>
            <br/><br/>
          <Row className="justify-content-end">
            <h3 className="display-4"><strong> SERVICES</strong></h3>
            <hr/>
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
