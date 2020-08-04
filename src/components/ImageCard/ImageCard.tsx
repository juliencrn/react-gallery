import React from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import ProgressiveImage from '../ProgressiveImage'
import { PexelsImage } from '../../interfaces'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

function ImageCard({
  id,
  photographer = 'anonym',
  photographer_url,
  src,
}: PexelsImage) {
  const [ref, entry] = useIntersectionObserver({ onAppearOnly: true })

  return (
    <article ref={ref} id={`image-${id}`}>
      <Card>
        <ProgressiveImage
          url={src.large}
          thumbUrl={src.tiny}
          alt={`image-${id}`}
          isVisible={Boolean(entry?.isVisible)}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            © Photo by
            {` `}
            <Link href={photographer_url} target="_blank" color="primary">
              {photographer}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </article>
  )
}

export default ImageCard
