import React, { FC } from 'react'
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link as BaseLink,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Layout: FC = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <BaseLink component={Link} to="/" color="inherit">
            Home
          </BaseLink>
        </Typography>
        <Box flex={1} />
        <Button component={Link} to="/gallery" color="inherit">
          Gallery
        </Button>
        <Button component={Link} to="/404" color="inherit">
          404
        </Button>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md">
      <>{children}</>
    </Container>
  </>
)

export default Layout
