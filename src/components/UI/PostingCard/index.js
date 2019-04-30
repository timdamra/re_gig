import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class PostingCard extends Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const {
      classes,
      posting: {
        cardHeader: { title: cardHeaderTitle, subHeader },
        cardMedia: {
          image = '/static/images/cards/paella.jpg',
          title: cardMediaTitle
        },
        cardContent: { typography }
      }
    } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="posting-card" className={classes.avatar}>
              Gig
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={cardHeaderTitle}
          subheader={subHeader}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title={cardMediaTitle}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {typography &&
              typography.length > 0 &&
              typography.map((text, idx) => (
                <li key={`card-content-${idx}`}>
                  <Typography paragraph>{text}</Typography>
                </li>
              ))}
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

PostingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  posting: PropTypes.object
}

export default withStyles(styles)(PostingCard)
