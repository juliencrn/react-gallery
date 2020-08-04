import React from 'react'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import ImageCard from '../ImageCard'
import { PexelsImage } from '../../interfaces'
import useFetch from '../../hooks/useFetch'

interface PexelsResponse {
  total_results: number
  page: number
  per_page: number
  photos: PexelsImage[]
  next_page: string
  prev_page: string
}

interface ImageListProps {
  query?: string
}

function ImageList({ query = 'spain' }) {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=9&page=5`
  const headers = { Authorization: process.env.REACT_APP_PEXELS_API_KEY }

  const { status, data } = useFetch<PexelsResponse>(url, { headers })

  const isLoading = status !== 'fetched' && typeof data === 'undefined'

  return (
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
          data?.photos.map(image => (
            <Grid key={image.id} item xs={12} sm={6} md={4}>
              <ImageCard data={image} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}

export default ImageList
