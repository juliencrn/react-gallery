import React from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import ProgressiveImage from '../ProgressiveImage'
import { Image } from '../../interfaces'
import { truncate } from '../../utils'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

function ImageCard({ id, title, user, imageUrls, alt_description }: Image) {
  const [ref, entry] = useIntersectionObserver({ onAppearOnly: true })

  return (
    <article ref={ref} id={`image-${id}`}>
      <ProgressiveImage
        url={imageUrls.regular}
        thumbUrl={imageUrls.thumb}
        alt={alt_description}
        isVisible={Boolean(entry?.isVisible)}
      />

      <Typography variant="body1" style={{ fontWeight: 'bold' }} component="h3">
        {truncate(title)}
      </Typography>

      <Typography variant="body2">
        By{` `}
        <Link href={user?.link || ''} target="_blank">
          {user?.name || 'anonym'}
        </Link>
      </Typography>
    </article>
  )
}

export default ImageCard
