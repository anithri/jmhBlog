import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/site.css'

const Layout = ({children, data}) => {
  const { site, contentfulSiteData } = data
  const { homeUrl, host } = site.siteMetadata
  const { title, keywords, description, pages } = contentfulSiteData
  return (
    <section className="pageGrid">
      <Helmet
        defaultTitle={title}
        titleTemplate={`${title} - %s`}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join(',') },
        ]}
      />
      <Header className="pageHeader" {...{ title, homeUrl, host }} />
      <Nav className="pageNav" {...{ pages }} />
      {children()}
      <Footer className="pageFooter" />
    </section>
  )
}

export default Layout

export const SiteLayoutQuery = graphql`
  query SiteLayoutQuery {
    site {
      siteMetadata {
        homeUrl
        host
      }
    }
    contentfulSiteData(current: { eq: "CURRENT" }) {
      title
      keywords
      description
      pages {
        linkName
        slug
      }
    }
  }
`
