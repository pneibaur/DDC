const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Thriving Mental Health`,
    url: `https://www.thrivingmh.com`, 
    description: `LCSW Therapist in Orem, Utah. Therapy & counseling for teenagers & adults: EMDR, Neurofeedback, DBT.`,
    phone: `801-810-5214`,
    address: `870 West Center Street, Orem, Utah 84057`,
    email: `Drew.Davis.Counseling@gmail.com`,
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