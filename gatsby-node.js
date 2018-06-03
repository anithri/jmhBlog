const path = require('path')
const Slug = require('./src/utils/Slug')
const moment = require('moment')
const _groupBy = require('lodash/groupBy')

const templatePath = (dir, template) => {
  return path.resolve('src', 'templates', dir, template + '.js')
}

const BUILD_DATE = moment().format()
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          contentfulSiteData(current: { eq: "CURRENT" }) {
            pages {
              contentful_id
              layout
              slug
            }
          }
          allContentfulPost(
            filter: { publishOn: { ne: null } }
            sort: { fields: [publishOn], order: DESC }
          ) {
            posts: edges {
              post: node {
                contentful_id
                layout
                publishOn
                slug
              }
            }
          }
        }
      `)
        .then(({ errors, data }) => {
          if (errors) {
            reject(errors)
          }

          const pages = data.contentfulSiteData.pages
            .filter(page => page.layout !== 'Special')
            .map(page => {
              return {
                contentful_id: page.contentful_id,
                slug: Slug.page(page.slug),
                slugHtml: Slug.page(page.slug, 'html'),
                template: templatePath('pages', page.layout),
              }
            })

          const posts = data.allContentfulPost.posts.map(({ post }) => {
            const dateStamp = moment(post.publishOn)
            return {
              contentful_id: post.contentful_id,
              dateStamp: dateStamp,
              path: Slug.post(post.slug, dateStamp),
              slug: Slug.post(post.slug, dateStamp),
              template: templatePath('posts', post.layout),
            }
          })

          return { pages, posts }
        }) // extract data from
        .then(result => {
          result.pages.forEach(page => {

            createPage({
              path: page.slug,
              component: page.template,
              context: {
                contentful_id: page.contentful_id,
              },
            })
            createPage({
              path: page.slugHtml,
              component: page.template,
              context: {
                contentful_id: page.contentful_id,
              },
            })
          })
          return result
        }) // generate pages
        .then(result => {
          result.posts.forEach(post => {
            createPage({
              path: post.path,
              component: post.template,
              context: {
                contentful_id: post.contentful_id,
              },
            })
          })

          return result
        }) // generate posts
        .then(result => {
          const byDate = {
              ..._groupBy(result.posts, (p => p.dateStamp.year())),
              ..._groupBy(result.posts, (p => p.dateStamp.format('YYYY-MM')))
          }
          Object.entries(([group, posts]) => {
            createPage({
              path: Slug.post('index', moment(group)),
              component: post.template,
              context: {
                contentful_id: post.contentful_id,
              },
            })
          })

          return result
        }) // generate post indicies

      //   //
      //   // // TODO Write Blog indices for
      //   // // blog/all.html  // Master List
      //   // // blog/<year>/index.html // Whole Year
      //   // // blog/<year>/<month>/<day>/index.html
      //   // // index.rss
      //   // // blog/index.rss
      //   // posts/index.rss
      //
      //   return result
      // })
    )
  })
}
