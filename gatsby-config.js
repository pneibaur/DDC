const path = require('path')

module.exports = {
  siteMetadata: {
    title: `DDC`,
    siteUrl: `https://drew-davis-counseling.netlify.app/`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "name": 'GatsbyJS',
      'short_name': 'GatsbyJS',
      'start_url': "/",
      'icon': "src/images/mtnLogo.png",
    }
}
]
};