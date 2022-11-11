import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
import { StaticImage } from "gatsby-plugin-image"
import RoundDisplay from "../components/circleImg"

const IndexPage = () => {

  return (
    <Layout>
      <div className="welcome">
        <StaticImage className="welcomeImg" src="../images/brandonGreenWasatchForest.jpeg" alt="Wasatch National Forest by Brandon Green" />
        <Container className="welcomeBanner">
          <Row>
            <Col xs={12}>
              <div>
                <h1>Drew Davis Counseling</h1>
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
          <Row>
            <Col xs={12} md={4}>
              <h4>DEPRESSION</h4>
            </Col>
            <Col xs={12} md={4}>
              <h4>ADDICTION</h4>
            </Col>
            <Col xs={12} md={4}>
              <h4>AND MORE</h4>
            </Col>
          </Row>
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
              <RoundDisplay banner={"EMDR"}></RoundDisplay>
            </Col>
            <Col xs={12} md={4}>
              <RoundDisplay banner={"CBT"}></RoundDisplay>
            </Col>
            <Col xs={12} md={4}>
              <RoundDisplay banner={"NEURO FEEDBACK"}></RoundDisplay>
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

