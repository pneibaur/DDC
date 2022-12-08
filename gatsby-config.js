const path = require('path')

module.exports = {
  siteMetadata: {
    title: `DDC`,
    siteUrl: `https://drew-davis-counseling.netlify.app/`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-anchor-links", "gatsby-plugin-image", "gatsby-background-image-es5", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": path.join(__dirname, 'src', 'images')
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
]
};