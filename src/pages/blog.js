import React from 'react'
import Helmet from 'react-helmet'
import PostHome from '../components/posts/Home'
import PropTypes from 'prop-types'
import postContainer, {contentfulPostShape} from '../containers/post'
import pageContainer, {contentfulPageShape} from '../containers/page'

class BlogHomePage extends React.Component {
  render() {
    const {data: {allContentfulPost,contentfulPage}} = this.props
    const posts = allContentfulPost.posts.map(({post}) => postContainer(post))
    const page = pageContainer(contentfulPage)

    return (
      <PostHome posts={posts} page={page} className={page.theme}>
        <Helmet title={page.title} />
      </PostHome>
    )
  }
}

export default BlogHomePage

// BlogHomePage.propTypes = {
//   data: {
//     contentfulPage: contentfulPageShape,
//     allContentfulPost: PropTypes.arrayOf(contentfulPostShape)
//   }
// }

export const BlogHomePageQuery = graphql`
  query BlogHomePageQuery {
    contentfulPage(slug: {eq: "writings" }) {
      ...commonPageFragment
    }
    allContentfulPost(
      limit: 3
      sort: { fields: [publishOn], order: DESC }
      filter: { publishOn: { ne: null } }
    ) {
      posts: edges {
        post: node {
          ...commonPostFragment
        }
      }
    }
  }
`
