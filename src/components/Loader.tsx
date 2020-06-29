import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { CircularProgress, CircularProgressProps } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(10, 'auto'),
  },
}))

function Loader(props: CircularProgressProps) {
  const classes = useStyles()
  return <CircularProgress className={classes.root} {...props} />
}

export default Loader
