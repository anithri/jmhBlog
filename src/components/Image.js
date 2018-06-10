import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
const Image = ({className, image}) => {

  return (
    <figure className={`${className} imageFigure`} >
      <Img sizes={image.sizes} alt={image.title}  />
      <figcaption className="legend">{image.title}</figcaption>
    </figure>
  )
}

export default Image