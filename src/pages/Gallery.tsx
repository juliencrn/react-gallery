import React from 'react'

import data from '../unsplash-spain.json'
import Layout from '../layout'

const images = data.results

function Gallery() {
  // console.log(images)
  return (
    <Layout>
      <h1>Spain images gallery</h1>
    </Layout>
  )
}

export default Gallery
