import React from 'react'
import Grid from '@material-ui/core/Grid'

import Layout from '../layout'
import useFetchImages from '../hooks/useFetchImages'
import Hero from '../components/Hero'
import ImageCard from '../components/ImageCard'
import SkeletonCard from '../components/ImageCard/SkeletonCard'

function Gallery() {
  const { images, isLoading } = useFetchImages()
  return (
    <Layout>
      <Hero title="Spain images gallery" />

      <Grid container spacing={4}>
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6].map(number => (
              <Grid key={number} item xs={12} sm={6} md={4}>
                <SkeletonCard />
              </Grid>
            ))}
          </>
        ) : (
          images.slice(0, 90).map(image => (
            <Grid key={image.id} item xs={12} sm={6} md={4}>
              <ImageCard {...image} />
            </Grid>
          ))
        )}
      </Grid>
    </Layout>
  )
}

export default Gallery
