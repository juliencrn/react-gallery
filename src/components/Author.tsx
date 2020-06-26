import React from 'react'
import { Typography, Link } from '@material-ui/core'

import { Image } from '../interfaces'

type AuthorProps = Pick<Image, 'user'>

function Author({ user }: AuthorProps) {
  return (
    <Typography>
      <Link href={user.link} target="_blank">{`By ${user.name}`}</Link>
    </Typography>
  )
}

export default Author
