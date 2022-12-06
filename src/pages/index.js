import * as React from "react"
import UAParser from "ua-parser-js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
import { StaticImage } from "gatsby-plugin-image"
import Specialties from "../components/specialties"
import SqDisplay from "../components/sqDisplay"

// --------------------------------------------------
// TO DO:
// --------------------------------------------------

// 2. make the form functional with an email service. 
//     - https://formspree.io/
//     - https://www.gatsbyjs.com/docs/building-a-contact-form/

// 4. create links to EMDR about, and Neurofeedback about. OR create some pages with quoted texts from each of these services? 

// 5. switch out the testimonial fake text with real ones once he gets them. 

// 7. switch the "home" link to an anchor link
// 8 resolve the error with anchor links. 
//     - I THINK it doesn't like Nav.Link combined with AnchorLink...
// --------------------------------------------------
// COMPLETE
// --------------------------------------------------
// - the services images need to be hoverable/clickable - info fades in upon hover. works on mobile
// - The mobile version: the services/specialties are off center. make them centered. 
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
      {/* WELCOME BANNER AND HERO IMAGE */}
      <div className="welcome">
        <StaticImage className="welcomeImg" src="../images/stockImages/brandonGreenWasatchForest.jpeg" alt="Wasatch National Forest by Brandon Green" />
        <Container className="welcomeBanner">
          <Row>
            <Col xs={12}>
              <div className="bannerTitleDiv">
                <StaticImage className="bannerTitle" src="../images/ddcMountainLogo.png" alt="Drew Davis Counseling" />
                <br />
                <br />
                <h2 className="bannerTitle"><em><u>For growth, healing, & building a better self</u></em></h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* SPECIALTIES SECTION (ADDICTION, TEENAGERS, SELF-ESTEEM, ETC.) */}
      <div id="specialties" className="welcomeSection specialties">
        <Container>
          <Row >
            <h3 className="display-4"><strong> SPECIALTIES</strong></h3>
            <hr />
          </Row>
          <Specialties deviceType={deviceType}></Specialties>
        </Container>
      </div>
      {/* SERVICES OFFERED */}
      <div id="services" className="welcomeSection services">
        <Container>
          <br /><br />
          {/* services banner */}
          <Row className="justify-content-end">
            <h3 className="display-4"><strong> SERVICES</strong></h3>
            <hr />
          </Row>
          {/* display images */}
          <Row className="justify-content-center">

            <SqDisplay
              img={<StaticImage src="../images/stockImages/EMDR.jpg" alt='EMDR' className='squareDisplay' />}
              banner="EMDR"
            >
              <div className="services-info">
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </SqDisplay>

            <SqDisplay
              img={<StaticImage src="../images/stockImages/CBT.jpg" alt='Cognitive Behavioral Therapy' className='squareDisplay' />}
              banner={"CBT"}>
              <div className="services-info">
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </SqDisplay>

            <SqDisplay
              img={<StaticImage src="../images/stockImages/neuroFeedback.jpg" alt='Neuro Feedback' className='squareDisplay' />}
              banner={"NEURO FEEDBACK"}>
              <div className="services-info">
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </SqDisplay>

          </Row>
        </Container>
      </div>
      {/* TESTIMONIALS */}
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
