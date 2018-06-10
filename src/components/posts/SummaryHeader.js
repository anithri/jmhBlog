import Link from 'gatsby-link'
import React from 'react'
import PropTypes from 'prop-types'
import Slug from '../../utils/Slug'
import { postShape } from '../../containers/post'

export const SummaryHeader = props => {
  const { post} = props
  const {
    dateStamp,
    publishDate,
    title,
  } = post
  return (
    <header className="postSummaryHeader">
      <time dateTime={dateStamp.format()}>
        <span>{dateStamp.format('MMM D, YYYY')}</span>
      </time>
      <h3>{title}</h3>
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
