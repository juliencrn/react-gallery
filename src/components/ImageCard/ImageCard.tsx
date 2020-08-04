import React from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import ProgressiveImage from '../ProgressiveImage'
import { PexelsImage } from '../../interfaces'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import Skeleton from '@material-ui/lab/Skeleton'

interface ImageCardProps {
  data?: PexelsImage
}

function ImageCard({ data }: ImageCardProps) {
  const [ref, entry] = useIntersectionObserver({ onAppearOnly: true })

  const showSkeleton = typeof data === 'undefined'

  return (
    <article ref={ref} id={`image-${data?.id || 'skeleton'}`}>
      <Card>
        <ProgressiveImage
          url={data?.src.large}
          thumbUrl={data?.src.tiny}
          alt={`image-${data?.id}`}
          isVisible={Boolean(entry?.isVisible)}
        />

        <CardContent>
          {showSkeleton ? (
            <Skeleton data-testid="image-title-skeleton" width="70%" />
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              © Photo by
              {` `}
              <Link
                href={data?.photographer_url}
                target="_blank"
                color="primary"
              >
                {data?.photographer}
              </Link>
            </Typography>
          )}
        </CardContent>
      </Card>
    </article>
  )
}

export default ImageCard
