import React, { useState } from 'react'

import Chip from '@material-ui/core/Chip'
import Container from '@material-ui/core/Container'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import ImageList from '../components/ImageList'

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

function Gallery() {
  const [query, setQuery] = useState('')

  const handleSearch = (search: string) => {
    setQuery(search)
  }

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
          <SearchForm onSearch={handleSearch} />
        </Container>
      </Hero>

      <ImageList query={query} />
    </Layout>
  )
}

export default Gallery
