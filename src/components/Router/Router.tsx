import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import loadable from '@loadable/component'

const Gallery = loadable(() => import('../../pages/Gallery'))
const Page404 = loadable(() => import('../../pages/Page404'))

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display" style={{ display: 'none' }}>
    {location.pathname}
  </div>
))

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Gallery} />
        <Route render={() => <Page404 />} />
      </Switch>

      <LocationDisplay />
    </>
  )
}

export default Router
