import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import PlainButton from 'components/UI/Button'
import SearchForm from 'components/UI/SearchForm'
import pic from '../../../../public/pic.jpg'
import vid from '../../../../public/Keyboard.mp4'
import gigPic from '../../../../public/Gigapp1024x366.png'

import './index.css'

class VidPlayer extends Component {
  render () {
    return (
      <div className="gig-video">
        <ReactPlayer
          url={vid}
          playing
          playsInline
          autoPlay
          muted
          loop
          poster={pic}
          width="100%"
          height="100%"
        />
        <header className="gig-video__header">
          <img className="gig-video__logo" src={gigPic} />
          <h4>{this.props.subHeaderMessaging}</h4>
          <SearchForm />
          <div className="gig-video__buttons-container">
            <PlainButton buttonText="Post a Service" />
            <PlainButton buttonText="Sell an Item" />
          </div>
        </header>
      </div>
    )
  }
}

VidPlayer.defaultProps = {
  subHeaderMessaging: 'Find Skilled Workers & Products Near You'
}

VidPlayer.propTypes = {
  subHeaderMessaging: PropTypes.string
}

export default VidPlayer
