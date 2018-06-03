import PropTypes from 'prop-types'

export const childShape = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.arrayOf(PropTypes.node),
  ])
