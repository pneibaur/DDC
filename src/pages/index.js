import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <div className="welcome-img">
        background image
        <h1 className="text-3xl font-bold underline">Drew Davis Counseling</h1>
      </div>
      <hr/>
      <div className="specialities">
        <h3>specialties</h3>
        <div>depression</div>
        <div>addiction</div>
        <div>other</div>
      </div>
      <hr/>
      <div>
        <h3>Services</h3>
        <div>EMDR</div>
        <div>CBT</div>
        <div>Nero feedback</div>
      </div>
      <hr/>
      <div>
        <h3>Testimonial Carousel</h3>
        <div>testimonials</div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

