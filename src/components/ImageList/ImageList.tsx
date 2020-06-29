import React from 'react'
import { Grid } from '@material-ui/core'

import ImageCard from '../ImageCard'
import { Image } from '../../interfaces'
import Loader from '../Loader'

export interface ImagesListProps {
  images: Image[]
  isLoading: boolean
}

function ImageList({ images, isLoading }: ImagesListProps) {
  return (
    <Grid container spacing={4}>
      {isLoading ? (
        <Loader />
      ) : (
        images.slice(0, 3).map(image => (
          <Grid key={image.id} item xs={12} sm={6} md={4}>
            <ImageCard {...image} />
          </Grid>
        ))
      )}
    </Grid>
  )
}

export default ImageList
