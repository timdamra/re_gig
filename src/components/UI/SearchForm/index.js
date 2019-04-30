import React, { Fragment } from 'react'
import PlainButton from 'components/UI/Button'

const SearchForm = () => {
  return (
    <Fragment>
      <input type="text" placeholder="What are you looking for?" />
      <input
        type="text"
        placeholder="location"
        style={{ marginBottom: '12px' }}
      />
      <PlainButton buttonText="Search" />
    </Fragment>
  )
}

export default SearchForm
