import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import Slug from '../../utils/Slug'
import { postShape } from '../../containers/post'

export const SummaryHeader = props => {
  const { post } = props
  const { dateStamp, publishDate, title } = post
  return (
    <header className="postSummaryHeader">
      <h3>
        {title}
        <time dateTime={dateStamp.format()}>
          <span>{publishDate}</span>
        </time>
      </h3>
    </header>
  )
}

SummaryHeader.propTypes = {
  post: postShape,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
}

SummaryHeader.defaultProps = {
  activeClassName: 'currentPage',
  className: 'postLink',
}

export default SummaryHeader
