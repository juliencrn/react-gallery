import React, { useRef } from 'react'

import Layout from '../layout'
import Hero from '../components/Hero'
import useEventListener from '../hooks/useEventListener'

function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onScroll = (event: Event) => {
    console.log('window scrolled!', event)
  }

  const onClick = (event: Event) => {
    console.log('button clicked!', event)
  }

  // example with window based event
  useEventListener('scroll', onScroll)

  // example with element based event
  useEventListener('click', onClick, buttonRef)

  return (
    <Layout>
      <Hero title="Welcome to Home" />
      <div style={{ minHeight: '200vh' }}>
        <button ref={buttonRef}>Click me</button>
      </div>
    </Layout>
  )
}

export default Home
