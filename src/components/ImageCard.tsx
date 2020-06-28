import React from 'react'

import ImageTitle from './ImageTitle'
import ImageAuthor from './ImageAuthor'
import ProgressiveImage from './ProgressiveImage'

import { Image as IImage } from '../interfaces'

const isLoading = false

function ImageCard({ title, user }: IImage) {
  return (
    <>
      <ProgressiveImage
        url="https://via.placeholder.com/500"
        isLoading={isLoading}
      />
      <ImageTitle title={title} isLoading={isLoading} />
      <ImageAuthor {...user} isLoading={isLoading} />
    </>
  )
}

export default ImageCard
