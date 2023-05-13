import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Container} from 'react-bootstrap'
// import { StaticImage } from 'gatsby-plugin-image'
import "../styles/about.scss"

const servicesInfo = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                    <h3 className='display-4'><strong> New Info Page</strong></h3>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default servicesInfo