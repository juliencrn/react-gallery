import React from 'react'
import Image from './Image'
import ImageTitle from './ImageTitle'
import ImageAuthor from './ImageAuthor'

import { Image as IImage } from '../interfaces'

const isLoading = true

function ImageCard({ title, user }: IImage) {
  return (
    <>
      <Image />
      <ImageTitle title={title} isLoading={isLoading} />
      <ImageAuthor {...user} isLoading={isLoading} />
    </>
  )
}

export default ImageCard
