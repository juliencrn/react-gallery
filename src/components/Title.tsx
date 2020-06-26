import React from 'react'
import { Typography } from '@material-ui/core'

import { Image } from '../interfaces'

type TitleProps = Pick<Image, 'title'>

function Content({ title }: TitleProps) {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
    </>
  )
}

export default Content
