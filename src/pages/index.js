import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
import { StaticImage } from "gatsby-plugin-image"
import RoundDisplay from "../components/circleImg"
import Specialties from "../components/specialties"

const IndexPage = () => {

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
            <h3>SPECIALTIES</h3>
          </Row>
          <Specialties></Specialties>
        </Container>
      </div>
      <div id="services" className="welcomeSection services">
        <Container>
          <hr />
          <Row className="justify-content-end">
            <h3>SERVICES</h3>
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

// TODO: 
// 1. make the nav sticky so it's visible all the time. 
// 2. make the form functional with an email service. 
//     https://formspree.io/
//     https://www.gatsbyjs.com/docs/building-a-contact-form/
// 3. the services/specialties images need to be hoverable/clickable
//     - when clicked/hovered, a darker transparent color slides "up", with a descriptive text of the item. 
//     - OR when hovered or clicked, the card "flips over" and reveals more info. 
// 4. create links to EMDR about, and Neurofeedback about. 
//     - OR create some pages with quoted texts from each of these services? 
// 5. LISTEN TO DREW'S FEEDBACK:
//   a) switch out the testimonial fake text with real ones once he gets them. 
//   b) logo needs to be more classy
//   c) specialties must also include: teenagers, anxiety, trauma, self esteem, conflict resolution. 
//   d) remove FB photos. only keep the Telos one (see if there's a better quality photo)