import React from 'react'
import PropTypes from 'prop-types'
import {pageShape} from '../containers/page'
import {postShape} from '../containers/post'
import Img from 'gatsby-image'

const Quote = ({children, className, subject }) => {
  const {body, images} = subject
  let image
  if (images) {
    image = (<Img resolutions={images[0].resolutions} alt={images[0].title} />)
  }
  return (
    <article className={`quote ${className}`}>
      {image}
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {/*<Img resolutions={node.featuredImage.resolutions}/>*/}
    </article>
  )
}

Quote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string.isRequired,
  subject: PropTypes.oneOfType([pageShape, postShape])
}

Quote.defaultProps = {
  className: ''
}

export default Quote
