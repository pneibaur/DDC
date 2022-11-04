import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"
import Testimonial from "../components/testimonial"
// import { StaticImage } from "gatsby-plugin-image"
// import { graphql, useStaticQuery } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
// import { convertToBgImage } from "gbimage-bridge"
// import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  // const {placeholderImage} = useStaticQuery(graphql`
  // query bgImg {
  //   file(relativePath: {eq: "icon.png"}) {
  //     relativePath
  //     childImageSharp {
  //       gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AVIF, AUTO, WEBP])
  //     }
  //   }
  // }
  // `)
  // const image = getImage(placeholderImage)
  // const bgImg = convertToBgImage(image)

  return (
    <Layout>
      <div className="bgImgp">
        <Container>
          <Row>
            <Col xs={12}>
              {/* <div className="heroBg" style={{ display: "grid" }}>
                  <StaticImage style={{ gridArea: "1/1" }} layout="fullWidth" aspectRatio={2 / 1} alt="" src="https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589" formats={["auto", "webp", "avif"]} />
                  <div style={{ gridArea: "1/1", position: "relative", placeItems: "center", display: "grid" }}>
                  <h1>Drew Davis Counseling</h1>
                  </div>
                </div> */}
              <div className="welcomeBanner">
                <h1>Drew Davis</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bgImgp">
        <Container>
          <hr />
          <Row >
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
          </Row>
        </Container>
      </div>
      <div className="bgImgp">
        <Container>
          <Row >
            <Row className="justify-content-end">
              <h3>SERVICES</h3>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <h4>EMDR</h4>
              </Col>
              <Col xs={12} md={4}>
                <h4>CBT</h4>
              </Col>
              <Col xs={12} md={4}>
                <h4>NEURO FEEDBACK</h4>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <div className="bgImgp">
        <Container>
          <Row >
            <Col xs={12}>
              <Row >
                {/* <h3>Testimonial Carousel</h3>
                <p>testimonials</p> */}
                <Testimonial>
                </Testimonial>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

