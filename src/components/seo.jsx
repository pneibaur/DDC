import * as React from 'react'
import useSiteMetadata from './useSiteMetadata'

const Seo = ({ title }) => {
    const data = useSiteMetadata()

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
            <title> {data} | {title} </title>
        </>
    )
}

export default Seo