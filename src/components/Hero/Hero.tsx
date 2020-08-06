import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(16, 0, 12),
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontWeight: 'lighter',
    marginBottom: theme.spacing(4),
  },
}))

export interface HeroProps {
  title: string
  subtitle?: string
}

const Hero: FC<HeroProps> = ({ title, subtitle, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography className={classes.title} variant="h1" component="h1">
          {title}
        </Typography>
        {subtitle && (
          <Typography className={classes.subtitle} variant="h4" component="h2">
            {subtitle}
          </Typography>
        )}
      </Container>
      {children && <Container maxWidth="sm">{children}</Container>}
    </div>
  )
}

export default Hero
