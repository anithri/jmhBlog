import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Footer = ({ className }) => (
  <footer className={className}>
    <span>Copyright 2017,2018 by Joe M Horvath</span>
    <span>
      Designed by Scott M Parrish
      with open source software
    </span>
  </footer>
)

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
