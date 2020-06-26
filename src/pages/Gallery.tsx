import React from 'react'
import { Grid } from '@material-ui/core'

import Layout from '../layout'
import ImageCard from '../components/ImageCard'
import useFetchImages from '../hooks/useFetchImages'
import { Image } from '../interfaces'

export interface ImagesListProps {
  images: Image[]
  isLoading: boolean
}

function ImagesList({ images }: ImagesListProps) {
  return (
    <Grid container spacing={4}>
      {images.map(image => (
        <Grid
          style={{ border: '1px dashed' }}
          key={image.id}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <ImageCard {...image} />
        </Grid>
      ))}
    </Grid>
  )
}

function Gallery() {
  const results = useFetchImages()

  return (
    <Layout>
      <h1>Spain images gallery</h1>

      <ImagesList {...results} />
    </Layout>
  )
}

export default Gallery
