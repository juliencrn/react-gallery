import React from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import ProgressiveImage from '../ProgressiveImage'
import { Image } from '../../interfaces'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

function ImageCard({ id, user, imageUrls }: Image) {
  const [ref, entry] = useIntersectionObserver({ onAppearOnly: true })

  return (
    <article ref={ref} id={`image-${id}`}>
      <Card>
        <ProgressiveImage
          url={imageUrls.regular}
          thumbUrl={imageUrls.thumb}
          alt={`image-${id}`}
          isVisible={Boolean(entry?.isVisible)}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            © Photo by
            {` `}
            <Link href={user?.link || ''} target="_blank" color="primary">
              {user?.name || 'anonym'}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </article>
  )
}

export default ImageCard
