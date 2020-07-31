import React, { FC } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

import BackToTop from './BackToTop'

const Layout: FC = ({ children }) => (
  <div>
    <AppBar position="static">
      <Box pt={1} />
    </AppBar>

    {children}

    <BackToTop />
  </div>
)

export default Layout
