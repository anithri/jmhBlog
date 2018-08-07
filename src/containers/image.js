import PropTypes from 'prop-types'
export const imageContainer = (image) => {
  return {...image}
}

export const imageShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sizes: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })
})
