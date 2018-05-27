import PropTypes from 'prop-types'

export const pageShape = PropTypes.shape({
  body: PropTypes.string,
  skin: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slugPath: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
})

export const contentfulPageShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  body: {
    childMarkdownRemark: {
      html: PropTypes.string
    }
  },
  theme: {
    skin: PropTypes.string,
  }
})

const pageContainer = (page) => {
  const body = page.body.childMarkdown.html
  const skin = (page.theme && page.theme.skin) || 'defaultSkin'
  const template = (page.layout && page.layout.template) || 'article'
  return {
    ...page,
    body,
    skin,
    template
  }
}

export const commonPageProps = graphql`
  fragment commonPageProps on ContentfulPage {
    slug
    title
    body {
      childMarkdownRemark {
        html
      }
    }
    layout {
      template
    }
    theme {
      skin
    }
  }
`


export default pageContainer