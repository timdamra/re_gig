import React, { Component, Fragment } from 'react'
import PostingCard from 'components/UI/PostingCard'

import './index.css'

class PostingList extends Component {
  render = () => {
    const postings = [
      {
        cardHeader: {
          title: 'Sample Gig',
          subHeader: 'Hire me'
        },
        cardMedia: {
          image: "https://img-aws.ehowcdn.com/600x600p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/dcb0e505f8e6411b94f8b369bc761ae7.jpg",
          title: 'sample'
        },
        cardContent: {
          typography: [
            'I do plumbing',
            'Electric',
            'gardening'
          ]
        }
      },
      {
        cardHeader: {
          title: 'Sample Gig',
          subHeader: 'Hire me'
        },
        cardMedia: {
          image: "https://img-aws.ehowcdn.com/600x600p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/dcb0e505f8e6411b94f8b369bc761ae7.jpg",
          title: 'sample'
        },
        cardContent: {
          typography: [
            'I do plumbing',
            'Electric',
            'gardening'
          ]
        }
      }
    ]

    return (
      <Fragment>
        <div className="gig-postings-list__header">
          <h2>Featured Postings</h2>
        </div>
        <ul className="gig-postings-list__container">
          {postings.map((posting, idx) => {
            return (
              <li style={{ paddingBottom: '12px' }} key={`home-postings-${idx}`}>
                <PostingCard
                  posting={posting}
                />
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

export default PostingList
