import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Slug from '../utils/Slug'
import {imageShape, imageContainer} from './image'

export const postShape = PropTypes.shape({
  body: PropTypes.string,
  dateStamp: PropTypes.instanceOf(moment),
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  slugPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageShape)
})

export const contentfulPostShape = PropTypes.shape({
  body: {
    childMarkdownRemark: {
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
    }
  },
  publishOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(imageShape)
})

const contentfulPost = (post) => {
  const dateStamp = moment(post.publishOn)
  const images = post.images ? post.images.map(i => imageContainer(i)) : []
  return {
    ...post,
    body: post.body.childMarkdownRemark.html,
    dateStamp,
    images,
    publishDate: dateStamp.format('MMM D'),
    slugPath: Slug.post(post.slug,dateStamp),
    summary: post.body.childMarkdownRemark.excerpt,
  }
}

export const commonPostFragment = graphql`
  fragment commonPostFragment on ContentfulPost {
    body {
      childMarkdownRemark {
        html
        excerpt
      }
    }
    images {
      title
      description
      sizes(maxWidth: 1280) {
        ...GatsbyContentfulSizes_noBase64
      }
    }
    publishOn
    slug
    summary
    theme
    title
  }
`


export default contentfulPost