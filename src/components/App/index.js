import React, { Component, Fragment } from 'react'

import VideoBackground from 'components/UI/VideoBackground'
import PostingList from 'components/UI/PostingList'

class App extends Component {
  render = () => {
    return (
      <Fragment>
        <VideoBackground />
        <PostingList className="gig-container" />
      </Fragment>
    )
  }
}

export default App
