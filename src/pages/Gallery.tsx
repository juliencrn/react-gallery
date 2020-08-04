import React from 'react'

import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Container from '@material-ui/core/Container'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ImageCard from '../components/ImageCard'
import useFetch from '../hooks/useFetch'

import { PexelsImage } from '../interfaces'

const hashtags = [
  'Cache',
  'REST',
  'Skeleton',
  'React Hooks',
  'IntersectionObserver',
  'BlurredImages',
  'Axios',
  'Pexels',
  'Typescript',
  'Material-ui',
]

interface PexelsResponse {
  total_results: number
  page: number
  per_page: number
  photos: PexelsImage[]
  next_page: string
  prev_page: string
}

function Gallery() {
  const url = `https://api.pexels.com/v1/search?query=spain&per_page=9&page=5`
  const headers = { Authorization: process.env.REACT_APP_PEXELS_API_KEY }

  const { status, data } = useFetch<PexelsResponse>(url, { headers })

  const isLoading = status !== 'fetched' && typeof data === 'undefined'

  return (
    <Layout>
      <Hero
        title="Images gallery"
        subtitle={`I built this experimental project to practice lazy-loading in a React
        application. We are therefore going to retrieve images from Pexels.com, and display them on the Gallery
        page.`}
      >
        <Container maxWidth="sm">
          {hashtags.map((text, i) => (
            <Chip
              key={`${text}-${i}`}
              label={`#${text}`}
              style={{ margin: '4px' }}
            />
          ))}
        </Container>
      </Hero>

      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6].map(number => (
                <Grid key={number} item xs={12} sm={6} md={4}>
                  <ImageCard />
                </Grid>
              ))}
            </>
          ) : (
            data?.photos.slice(0, 90).map(image => (
              <Grid key={image.id} item xs={12} sm={6} md={4}>
                <ImageCard data={image} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Gallery
