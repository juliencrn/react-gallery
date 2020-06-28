import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

import ProgressiveImage from '../ProgressiveImage'
import ImageTitle from '../ImageTitle'
import ImageAuthor from '../ImageAuthor'
import { Image } from '../../interfaces'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}))

const isLoading = false

function ImageCard({ id, title, user, imageUrls, alt_description }: Image) {
  const classes = useStyles()
  const { thumb, full } = imageUrls
  return (
    <article id={`image-${id}`} className={classes.root}>
      <ProgressiveImage
        url={full}
        thumbUrl={thumb}
        isLoading={isLoading}
        alt={alt_description}
      />
      <ImageTitle title={title} isLoading={isLoading} />
      <ImageAuthor {...user} isLoading={isLoading} />
    </article>
  )
}

export default ImageCard
