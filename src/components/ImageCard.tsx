import React from 'react'
import Image from './Image'
import Title from './Title'
import Author from './Author'

import { Image as IImage } from '../interfaces'

function ImageCard({ title, user }: IImage) {
  return (
    <>
      <Image />
      <Title title={title} />
      <Author user={user} />
    </>
  )
}

export default ImageCard
