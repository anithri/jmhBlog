import React from 'react'
import PostLink from './PostLink'
import PropTypes from 'prop-types'
import {postShape} from '../../containers/post'

export const Summary = ({ post, className }) => {
  const { summary, publishDate, dateStamp } = post

  return (
    <article className={`${className} postSummary`}>
      <header>
        <h4>
          <PostLink post={post} className="postSummaryLink" />
        </h4>
      </header>
      <p>{summary}</p>
    </article>
  )
}

Summary.propTypes = {
  className: PropTypes.string,
  post: postShape,
}

export default Summary
