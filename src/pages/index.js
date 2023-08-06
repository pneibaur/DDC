// import { Helmet } from "react-helmet"
import * as React from "react"
import UAParser from "ua-parser-js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
import { StaticImage } from "gatsby-plugin-image"
// import Specialties from "../components/specialties"
// import SqDisplay from "../components/sqDisplay"

// --------------------------------------------------
// TO DO:
// --------------------------------------------------
// - display error: services are off center for some reason. developing doesn't show the off-center :(. but on my phone it definitely is off center. 
// - google searchability: SEO. make it searchable! 

// --------------------------------------------------
// COMPLETE
// --------------------------------------------------
// - LAST: purchase the domain name! 
// - make the form functional with netlify email service. Drew needs to turn this on.
// - add one more card on the 'additional info' page, describing the seven challenges
// - services: add the 7 challenges (like 12 steps but takes out spirituality. )
// - rework pages: home (contains banner & testimonials), specialties & services on their own page, more (additional info page), about page. 
// - display error: services on hover don't switch focus when on mobile. quite frustrating. 
// - resolve the error with anchor links. 
// - the services images need to be hoverable/clickable - info fades in upon hover. works on mobile
// - The mobile version: the services/specialties are off center. make them centered. 
// - make the nav sticky so it's visible all the time. 
// - logo needs to be more classy
// - specialties must also include: teenagers, anxiety, trauma, self esteem, conflict resolution. 
// - create a page for EMDR and Neuro feedback for Drew to write some content 
// - remove FB photos. only keep the Telos one (see if there's a better quality photo)
// - Improve the welcome banner image and title: 
//     - switch the title with the logo
//     - add a placeholder slogan until Drew gets back to me. 
//     - make the image take up less initial space. skinnier overall. 

const IndexPage = () => {

  const parser = new UAParser()
  const result = parser.getResult()
  const deviceType = (result.device && result.device.type) || "desktop"

  return (
    <>
      <Layout>
        {/* WELCOME BANNER AND HERO IMAGE */}
        <Seo />
        <div id="welcome" className="welcome">
          <StaticImage className="welcomeImg" src="../images/stockImages/brandonGreenWasatchForest.jpeg" alt="Wasatch National Forest by Brandon Green" />
          <Container className="welcomeBanner">
            <Row>
              <Col xs={12}>
                <div className="bannerTitleDiv">
                  <StaticImage className="bannerTitle" src="../images/ddcMountainLogo.png" alt="Drew Davis Counseling" />
                  <br />
                  <br />
                  <h2 className="bannerTitle"><em><u>For growth, healing, & building a better self</u></em></h2>
                  <h5>801-810-5214</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* TESTIMONIALS */}
        <div id="" className="">
          <Container>
            <Testimonial deviceType={deviceType}></Testimonial>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
