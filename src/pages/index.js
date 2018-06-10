import React from 'react'
import Helmet from 'react-helmet'
import Article from '../components/Article'
import pageContainer, {contentfulPageShape} from '../containers/page'
import PropTypes from 'prop-types'

const Index = ({data: {contentfulPage}}) => {
  const page = pageContainer(contentfulPage)

  return (
    <Article className={`homePage ${page.theme}`} subject={page}>
      <Helmet title={page.title} />
    </Article>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    contentfulPage: contentfulPageShape
  })
}

export default Index

export const HomePageQuery = graphql`
  query homePageQuery {
    contentfulPage(slug: {eq: "home" }) {
      ...commonPageFragment
    }
  }
`
