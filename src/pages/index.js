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
// - search for dynamic CSS font sizes. for the H1 tag. 
// - change the banner title away from the logo image, and switch to the logo with an H1 tag. for searchability. 

// --------------------------------------------------
// COMPLETE
// --------------------------------------------------
// - LAST: purchase the domain name! 
// - google searchability: SEO. make it searchable! 
// - display error: services are off center for some reason. developing doesn't show the off-center :(. but on my phone it definitely is off center. 
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
              <div className="bannerTitleDiv">
                <Col xs={12}>
                  <div className="nameAndLogo">
                    <div className="logoDiv">
                      <StaticImage className="bannerLogo" src="../images/ThrivingMHLogo.png" alt="Logo for Thriving Mental Health" />
                    </div>
                    <br />
                    <div className="title companyNameDiv">
                      <h1 className="title companyName">Thriving Mental Health</h1>
                    </div>
                    <br />
                  </div>
                </Col>
                <Col>
                  <h2 className="bannerText bannerMsg"><em><u>For growth, healing, & building a better self</u></em></h2>
                </Col>
              </div>
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
