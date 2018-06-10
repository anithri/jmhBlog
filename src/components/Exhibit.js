import React from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'
import { imageShape } from '../containers/image'
import { childShape } from '../containers/other'
// import { Carousel } from 'react-responsive-carousel'
import FeaturedImage from './FeaturedImage'

const Exhibit = ({ className, images, limit, emptyExhibit = null }) => {
  if (limit === 0 || images.length === 0) return emptyExhibit
  if (limit > 0 || images.length > 0) {
    return <FeaturedImage image={images[0]} />
  }

  const imageCount = limit < 0 || limit > images.length ? images.length : limit

  const figures = images.slice(0, imageCount).map(image => (
    <Image key={uuidv4()} image={image} className={`$className galleryImage`} />
  ))

  return (<aside><ul>{figures}</ul></aside>)
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
