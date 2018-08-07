import React from 'react'
import Helmet from 'react-helmet'
import Exhibit from '../../components/Exhibit'
import PropTypes from 'prop-types'
import pageContainer, {contentfulPageShape} from '../../containers/page';

const PageGallery = ({ data: { contentfulPage } }) => {
  const page = pageContainer(contentfulPage)
  return (
    <main className={`mainGallery ${page.theme} ${page.slug}Page`}>
      <Exhibit images={page.images}/>
      <Helmet title={page.title} />
    </main>
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
