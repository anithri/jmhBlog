import React from 'react'
import SummaryHeader from './SummaryHeader'
import PropTypes from 'prop-types'
import { postShape } from '../../containers/post'
import Link from 'gatsby-link'



export const Summary = ({ post, className }) => {
  const {title, slugPath, summary, publishDate, dateStamp } = post

  return (
    <Link to={slugPath} alt={title}>
      <article className={`${className} postSummary`}>
        <SummaryHeader post={post} className="postSummaryLink" />
        <p>{summary}</p>
      </article>
    </Link>
  )
}

Summary.propTypes = {
  className: PropTypes.string,
  post: postShape,
}

export default Summary
