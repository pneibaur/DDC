import * as React from 'react'
// import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ Title, Description, Email, Phone }) => {

    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    
    const {
        description,
        email,
        phone,
        title,
        url,
    } = site.siteMetadata
    
    const seo = {
        title: Title ? `${Title} | ${title}` : title,
        description: Description || description,
        url: `${url}${pathname}`,
        email: Email || email,
        phone: Phone || phone,
    }

    return (
        <>
            <Helmet title={seo.title} >
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
                <title> {seo.title} </title>
                <meta name='description' content={seo.description} />
                <meta name="image" content={seo.image} />
                <meta name="phone" content={seo.phone} />
                <meta name="email" content={seo.email} />
                <meta name="url" content={seo.url} />
                {/* {seo.url && <meta property="og:url" content={seo.url} />}
                {seo.title && <meta property="og:title" content={seo.title} />}
                {seo.description && <meta property="og:description" content={seo.description} />}
                {seo.phone && <meta property="og:phone" content={seo.phone} />}
                {seo.email && <meta property="og:email" content={seo.email} />} */}
            </Helmet>
        </>
    )
}

export default Seo

// Seo.propTypes = {
//     title: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     phone: PropTypes.string,
//     email: PropTypes.string,
// }

// Seo.defaultProps = {
//     title: null,
//     description: null,
//     image: null,
//     url: null,
//     phone: null,
//     email: null,
// }

const query = graphql`
query {
    site {
      siteMetadata {
        description
        email
        phone
        title
        url
      }
    }
  }
`