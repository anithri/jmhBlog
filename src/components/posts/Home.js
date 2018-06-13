import React from 'react'
import PropTypes from 'prop-types'
import SummaryList from './SummaryList'
import { pageShape } from '../../containers/page'
import { postShape } from '../../containers/post'
import Exhibit from '../Exhibit'

const PostHome = ({ children, className, page, posts }) => {
  return [
    <aside key={'postHomeExhibit'} className="fadeOut">
      <Exhibit
        className={'fadeout'}
        images={page.images}
      />
    </aside>,
    <main key="postHome" className={`${className} postHome`}>
      <header>
        <h2>{page.title}</h2>
      </header>
      <SummaryList posts={posts} />
      {children}
    </main>,
  ]
}

PostHome.propTypes = {
  className: PropTypes.string,
  page: pageShape.isRequired,
  posts: PropTypes.arrayOf(postShape).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

PostHome.defaultProps = {
  className: '',
}

export default PostHome
