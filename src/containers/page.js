import 'react'
import PropTypes from 'prop-types'
import { imageContainer, imageShape } from './image'

export const pageShape = PropTypes.shape({
  body: PropTypes.string,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageShape),
})

export const contentfulPageShape = PropTypes.shape({
  body: {
    childMarkdownRemark: {
      html: PropTypes.string.isRequired,
    },
  },
  slug: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageShape),
})

const pageContainer = (page) => {
  const images = page.images ? page.images.map(i => imageContainer(i)) : []
  const body = page.body.childMarkdownRemark.html
  return {
    ...page,
    body,
    images,
  }
}

export const commonPageFragment = graphql`
  fragment commonPageFragment on ContentfulPage {
    body {
      childMarkdownRemark {
        html
      }
    }
    images {
      title
      description
      resize(width: 640, height: 640, resizingBehavior: PAD) {
        src
        width
        height
        aspectRatio
      }
    }
    slug
    theme
    title
  }
`

export default pageContainer