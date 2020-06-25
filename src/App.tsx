import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/Home'))
const Gallery = loadable(() => import('./pages/Gallery'))
const Page404 = loadable(() => import('./pages/Page404'))

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route render={() => <Page404 />} />
      </Switch>
    </>
  )
}

export default App
