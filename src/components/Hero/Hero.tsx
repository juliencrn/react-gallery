import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(10, 0),
    textAlign: 'center',
  },
}))

export interface HeroProps {
  title: string
}

function Hero({ title }: HeroProps) {
  const classes = useStyles()
  return (
    <Typography className={classes.root} variant="h2" component="h1">
      {title}
    </Typography>
  )
}

export default Hero
