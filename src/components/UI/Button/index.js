import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
  plainButton: {
    border: '1px solid black',
    maxWidth: '45%',
    [theme.breakpoints.up('md')]: {
      border: '1px solid white',
      fontSize: '18px',
      color: 'white'
    }
  }
})

class PlainButton extends PureComponent {
  render = () => {
    const { buttonText = '', classes } = this.props

    return (
      <Button variant="outlined" className={classNames(classes.plainButton)}>
        {buttonText}
      </Button>
    )
  }
  static propTypes = {
    buttonText: PropTypes.string,
    classes: PropTypes.object
  }
}

export default withStyles(styles)(PlainButton)
