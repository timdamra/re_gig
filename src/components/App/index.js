import React, { Component, Fragment } from 'react'

import VidPlayer from 'components/UI/VideoBackground/test'
import PostingList from 'components/UI/PostingList'
import Footer from 'components/UI/Footer'

class App extends Component {
  render = () => {
    return (
      <Fragment>
        <VidPlayer  />
        <PostingList className="gig-container" />
        <Footer />
      </Fragment>
    )
  }
}

export default App
