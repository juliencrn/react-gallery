import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Axios from 'axios'

import ImageCard from '../ImageCard'
import { PexelsResponse } from '../../interfaces'
import { RootState } from '../../redux/store'
import {
  getInitialImages,
  setLoading,
  setError,
  loadMore,
} from '../../redux/imageModule'
import useEventListener from '../../hooks/useEventListener'

async function fetchImages(url: string): Promise<PexelsResponse> {
  const headers = { Authorization: process.env.REACT_APP_PEXELS_API_KEY }
  try {
    const response = await Axios.get<PexelsResponse>(url, { headers })
    return response.data
  } catch (error) {
    throw error
  }
}

function ImageList() {
  const dispatch = useDispatch()
  const { query, photos, next_page, isLoading } = useSelector(
    (state: RootState) => state.image,
  )

  const loadMoreImage = async (url: string) => {
    dispatch(setLoading())
    try {
      const data = await fetchImages(url)
      if (data?.photos) {
        dispatch(loadMore(data))
      }
    } catch (error) {
      dispatch(setError())
    }
  }

  const onScroll = () => {
    const scrollTop =
      window.innerHeight + document.documentElement.scrollTop + 150
    const isBottom = scrollTop > document.documentElement.offsetHeight
    if (isBottom && !isLoading && next_page) {
      loadMoreImage(next_page)
    }
  }

  useEventListener('scroll', onScroll)

  useEffect(() => {
    const loadInitialImage = async () => {
      dispatch(setLoading())
      try {
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=9`
        const data = await fetchImages(url)

        if (data?.photos) {
          dispatch(getInitialImages(data))
        }
      } catch (error) {
        dispatch(setError())
      }
    }

    loadInitialImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        {photos.length > 0 ? (
          photos.map(image => (
            <Grid key={image.id} item xs={12} sm={6} md={4}>
              <ImageCard data={image} />
            </Grid>
          ))
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6].map(number => (
              <Grid key={number} item xs={12} sm={6} md={4}>
                <ImageCard />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Container>
  )
}

export default ImageList
