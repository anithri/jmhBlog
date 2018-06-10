import React from 'react'
import Summary from './Summary'
import PropTypes from 'prop-types'
import {postShape} from '../../containers/post'

export const SummaryList = ({ posts, className }) => {
  const postSummaries = posts.map(post => (
    <li key={`postSummary-${post.slug}`}>
      <Summary post={post} />
    </li>
  ))

  return (
    <ul className={className}>
      {postSummaries}
    </ul>
  )
}

SummaryList.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.arrayOf(postShape),
}

SummaryList.defaultProps = {
  className: 'postSummaryList',
}
export default SummaryList
