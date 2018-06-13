import React from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'
import { imageShape } from '../containers/image'
import { childShape } from '../containers/other'
import FeaturedImage from './FeaturedImage'
import Image from './Image';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({ className, items}) => {
  console.log('Gallery')
  console.info(items)
  return (
    <ImageGallery
      items={items}
      slideInterval={2000}
      renderItem={Image}
      showIndex
    />
  )
}

Gallery.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(imageShape),
}

Gallery.defaultProps = {
  className: '',
}
export default Gallery
