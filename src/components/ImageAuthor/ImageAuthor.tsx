import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Typography, Link } from '@material-ui/core'
import { User } from '../../interfaces'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}))

export type ImageAuthorProps = Partial<Omit<User, 'id'>> & {
  isLoading?: boolean
}

function ImageAuthor({ name, link, isLoading }: ImageAuthorProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {isLoading ? (
        <Skeleton width="40%" data-testid="image-author-skeleton" />
      ) : (
        <Typography>
          <Link href={link || ''} target="_blank">{`By ${
            name || 'anonym'
          }`}</Link>
        </Typography>
      )}
    </div>
  )
}

export default ImageAuthor
