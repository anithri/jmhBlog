import React from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'
import { imageShape } from '../containers/image'
import { childShape } from '../containers/other'
import FeaturedImage from './FeaturedImage'
import Gallery from '../components/Gallery'

const Exhibit = ({ className, images, limit, emptyExhibit = null }) => {
  if (limit === 0 || images.length === 0) return emptyExhibit
  if (limit === 1 || images.length === 1) {
    return <FeaturedImage image={images[0]} />
  }

  const imageCount = limit < 0 || limit > images.length ? images.length : limit

  // const figures = images.slice(0, imageCount).map(image => (

  return (
    <aside className={'exhibit'}>
      <Gallery items={images.slice(0, imageCount)} />
    </aside>
  )
}

Exhibit.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(imageShape),
  limit: PropTypes.number,
  emptyExhibit: childShape,
}

Exhibit.defaultProps = {
  className: '',
  limit: -1,
}
export default Exhibit
