import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import PlainButton from 'components/UI/Button'
import SearchForm from 'components/UI/SearchForm'

import vid from '../../../../public/Keyboard.mp4'
import pic from '../../../../public/pic.jpg'
import gigPic from '../../../../public/Gigapp1024x366.png'

import './index.css'

function VideoBackground(props) {
  return (
    <Fragment>
      <video
        className="gig-video"
        playsInline
        autoPlay
        muted
        loop
        poster={pic}
        id="bgvid"
      >
        <source src={vid} type="video/webm" />
      </video>
      <header className="gig-video__header">
        <img className="gig-video__logo" src={gigPic} />
        <h4>{props.subHeaderMessaging}</h4>
        <SearchForm />
        <div className="gig-video__buttons-container">
          <PlainButton buttonText="Post a Service" />
          <PlainButton buttonText="Sell an Item" />
        </div>
      </header>
    </Fragment>
  )
}

VideoBackground.defaultProps = {
  subHeaderMessaging: 'Find Skilled Workers & Products Near You'
}

VideoBackground.propTypes = {
  subHeaderMessaging: PropTypes.string
}

export default VideoBackground
