import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () => {
    return (
      <div>
        Testing
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
)
