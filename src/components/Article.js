import React from 'react'
import PropTypes from 'prop-types'
import {postShape} from '../containers/post'
import {pageShape} from '../containers/page'
import Img from 'gatsby-image'
const Article = ({ children, className, subject }) => {
  console.log('Article', subject)
  const { body, timeStamp, dateStamp, publishDate, title, images } = subject
  let timeHeader

  const imageTags = images.map(image => {
    return (<Img key={`image${image.title}`} sizes={image.sizes} alt={image.title} />)
  })

  if (dateStamp) {
    timeHeader = (<time dateTime={dateStamp.format()}>{publishDate}</time>)
  }
  return (
    <article className={`${className} article`}>
      <header>
        <h3>{title}</h3>
        {timeHeader}
      </header>
      {imageTags}
      <section dangerouslySetInnerHTML={{ __html: body }} />
      <div>{/*<Img resolutions={node.featuredImage.resolutions}/>*/}</div>
      {children}
    </article>
  )
}

Article.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  subject: PropTypes.oneOfType([pageShape, postShape]),
}

Article.defaultProps = {
  className: '',
}

export default Article
