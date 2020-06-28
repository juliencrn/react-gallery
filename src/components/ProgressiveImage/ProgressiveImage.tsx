import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'

const height = 240

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'aquablue',
    width: '100%',
    height,
    marginBottom: theme.spacing(2),
  },
  image: {
    objectFit: 'cover',
    height,
  },
}))

export interface ProgressiveImageProps {
  url: string
  alt?: string
  isLoading?: boolean
}

function ProgressiveImage({ url, alt, isLoading }: ProgressiveImageProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Skeleton
          variant="rect"
          width="100%"
          height={height}
          data-testid="image-skeleton"
        />
      ) : (
        <img
          className={classes.image}
          data-testid="image"
          src={url}
          alt={alt || ''}
          width="100%"
        />
      )}
    </div>
  )
}

export default ProgressiveImage
