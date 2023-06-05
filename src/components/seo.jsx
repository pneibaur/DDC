import * as React from 'react'
import useSiteMetadata from './useSiteMetadata'

const Seo = ({ title, pathname, description, children }) => {
    const {title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

     const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
     }

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
            <title> {seo.title} </title>
            <meta name='description' content={seo.description} />
            <meta name='url' content={seo.url} />
            <meta name='title' content={seo.title} />
            {children}
        </>
    )
}

export default Seo