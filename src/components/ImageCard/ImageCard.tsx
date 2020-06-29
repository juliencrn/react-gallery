import React from 'react'
import { Box } from '@material-ui/core'

import ProgressiveImage from '../ProgressiveImage'
import ImageTitle from '../ImageTitle'
import ImageAuthor from '../ImageAuthor'
import { Image } from '../../interfaces'

const isLoading = false

function ImageCard({ id, title, user, imageUrls, alt_description }: Image) {
  const { thumb, full } = imageUrls

  return (
    <Box component="article" id={`image-${id}`} mb={2}>
      <ProgressiveImage
        url={full}
        thumbUrl={thumb}
        isLoading={isLoading}
        alt={alt_description}
      />
      <ImageTitle title={title} isLoading={isLoading} />
      <ImageAuthor {...user} isLoading={isLoading} />
    </Box>
  )
}

export default ImageCard
