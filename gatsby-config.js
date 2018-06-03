module.exports = {
  siteMetadata: {
    title: 'The Art of Joe M Horvath',
    homeUrl: '/',
    host: 'localhost:8000'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.DAD_SPACE_ID,
        accessToken: process.env.DAD_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography',
      },
    },
    'gatsby-transformer-remark',
    // {
    //   resolve: `gatsby-plugin-postcss-sass`,
    //   options: {
    //     postCssPlugins: [
    //       require('postcss-cssnext')(),
    //       require('postcss-nesting')()
    //     ]
    //   },
    // },
  ],
}
