import React, { useRef } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'
import useElementSize from '../../hooks/useElementSize'

type StylesProps = { height: number }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    marginBottom: theme.spacing(2),
    height: (p: StylesProps) => p.height,
  },
  image: {
    objectFit: 'cover',
    height: (p: StylesProps) => p.height,
    position: 'absolute',
    top: 0,
    left: 0,
  },
}))

export interface ProgressiveImageProps {
  url: string
  thumbUrl: string
  alt?: string
  isLoading?: boolean
}

function ProgressiveImage({
  url,
  thumbUrl,
  alt,
  isLoading,
}: ProgressiveImageProps) {
  const onImageLoad = () => {
    // Do stuff...
  }

  const rootRef = useRef<HTMLDivElement>(null)

  const { width: height } = useElementSize(rootRef)

  const classes = useStyles({ height })

  return (
    <div ref={rootRef} className={classes.root}>
      {isLoading ? (
        <Skeleton
          variant="rect"
          width="100%"
          height={height}
          data-testid="image-skeleton"
        />
      ) : (
        <>
          <img
            className={classes.image}
            data-testid="thumb-image"
            src={thumbUrl}
            alt={alt || ''}
            width="100%"
          />
          <img
            onLoad={onImageLoad}
            className={classes.image}
            data-testid="image"
            src={url}
            alt={alt || ''}
            width="100%"
          />
        </>
      )}
    </div>
  )
}

export default ProgressiveImage
