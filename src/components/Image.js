import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
const Image = props => {
  const { className, resolutions, title, description } = props
  return (
    <figure className={`${className} imageFigure`}>
      <Img resolutions={resolutions} alt={title} title={title} className={'image'}/>
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export default Image
