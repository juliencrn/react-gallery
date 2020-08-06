import React from 'react'
import { useDispatch } from 'react-redux'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import ImageList from '../components/ImageList'
import { updateQuery } from '../redux/imageModule'

function Gallery() {
  const dispatch = useDispatch()

  const handleSearch = (search: string) => {
    dispatch(updateQuery(search))
  }

  return (
    <Layout>
      <Hero
        title="Images gallery"
        subtitle={`I built this experimental project to practice lazy-loading in a React
        application. We are therefore going to retrieve images from Pexels.com, and display them on the Gallery
        page.`}
      >
        <SearchForm onSearch={handleSearch} />
      </Hero>

      <ImageList />
    </Layout>
  )
}

export default Gallery
