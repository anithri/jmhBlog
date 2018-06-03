import React from 'react'
import Helmet from 'react-helmet'
import Gallery from '../../components/Article'
import PropTypes from 'prop-types'
import pageContainer, {contentfulPageShape} from '../../containers/page';

const PageGallery = ({ data: { contentfulPage } }) => {
  const page = pageContainer(contentfulPage)
  return (
    <Gallery subject={page} className={`pageArticle ${page.theme} ${page.slug}Page`}>
      <Helmet title={page.title} />
    </Gallery>
  )
}

PageGallery.propTypes = {
  data: PropTypes.shape({
    contentfulPage: contentfulPageShape.required
  })
}

export default PageGallery

export const PageGalleryQuery = graphql`
  query PageGalleryQuery($contentful_id: String!) {
    contentfulPage(contentful_id: { eq: $contentful_id }) {
      ...commonPageFragment
    }
  }
`
