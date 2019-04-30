import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Footer = props => {
  const {
    heading,
    privacyPolicy,
    terms,
    about,
    contact
  } = props

  return (
    <footer>
      <h4>{heading}</h4>
      <div className="gig-legal">
        <p>{privacyPolicy} | </p>
        <p>{terms} | </p>
        <p>{about} | </p>
        <p>{contact}</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  heading: PropTypes.string,
  privacyPolicy: PropTypes.string,
  terms: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string
}

Footer.defaultProps = {
  heading: 'Copyright © 2018 Gigapp • Built in Chicago',
  privacyPolicy: 'Privacy Policy',
  terms: 'Terms & Conditions',
  about: 'About',
  contact: 'contact'
}

export default Footer
