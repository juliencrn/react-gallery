import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

const Gallery = loadable(() => import('../../pages/Gallery'))
const Page404 = loadable(() => import('../../pages/Page404'))

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Gallery} />
      <Route render={() => <Page404 />} />
    </Switch>
  )
}

export default Router
