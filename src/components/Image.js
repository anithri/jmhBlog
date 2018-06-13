import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
const Image = props => {
  console.info('WTF', props)
  const { className, sizes, title, description } = props
  return (
    <figure className={`${className} imageFigure`}>
      <Img sizes={sizes} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export default Image
