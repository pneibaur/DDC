import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Row, Col, Container, Card } from 'react-bootstrap'
import "../styles/about.scss"

const services = () => {
    return (
    < Layout >
        <Container>
            <Row>
                <Col>
                    <h1>Specialties and Services</h1>
                </Col>
            </Row>
        </Container>
    </Layout >
    )
}

export const Head = () => <Seo title="Services" />

export default services