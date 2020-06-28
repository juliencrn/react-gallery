import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import ImageCard from '../ImageCard'
import { Image } from '../../interfaces'

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}))

export interface ImagesListProps {
  images: Image[]
  isLoading: boolean
}

function ImageList({ images }: ImagesListProps) {
  const classes = useStyles()
  return (
    <Grid container spacing={4}>
      {images.map(image => (
        <Grid key={image.id} item xs={12} sm={6} md={4}>
          <ImageCard {...image} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ImageList
