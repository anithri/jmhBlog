import React from 'react'
import PropTypes from 'prop-types'
import { postShape } from '../containers/post'
import { pageShape } from '../containers/page'
import Img from 'gatsby-image'
import Exhibit from './Exhibit'
import FeaturedImage from './FeaturedImage'

const Article = ({ children, className, subject }) => {
  const { body, timeStamp, dateStamp, publishDate, title, images } = subject
  let timeHeader, imageTags

  if (images.length > 0) {
    imageTags = <Img sizes={images[0].sizes} alt={images[0].title} />
  }

  if (dateStamp) {
    timeHeader = <time dateTime={dateStamp.format()}>{publishDate}</time>
  }
  return [
    <aside>
      <Exhibit
        key="ArticleExhibit"
        images={images}
        className={'articleExhibit'}
      />
    </aside>,
    <article key="Article" className={`${className} article`}>
      <header>
        <h2>{title}</h2>
        {timeHeader}
      </header>
      <section dangerouslySetInnerHTML={{ __html: body }} />
      {children}
    </article>,
  ]
}

Article.propTypes = {
  className: PropTypes.string,
  subject: PropTypes.oneOfType([pageShape, postShape]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Article.defaultProps = {
  className: '',
}

export default Article
