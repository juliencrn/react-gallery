import React from 'react'

import Layout from '../layout'
import useFetchImages from '../hooks/useFetchImages'
import Hero from '../components/Hero'
import ImageList from '../components/ImageList'

function Gallery() {
  const results = useFetchImages()
  return (
    <Layout>
      <Hero title="Spain images gallery" />

      <ImageList {...results} />
    </Layout>
  )
}

export default Gallery
