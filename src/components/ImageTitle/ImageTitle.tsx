import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))

export interface ImageTitleProps {
  title: string
  isLoading?: boolean
}

function ImageTitle({ title, isLoading }: ImageTitleProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isLoading ? (
        <>
          <Skeleton data-testid="image-title-skeleton" />
          <Skeleton width="60%" />
        </>
      ) : (
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      )}
    </div>
  )
}

export default ImageTitle
