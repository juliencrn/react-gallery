import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton'
import Square from '../Square'

function SkeletonCard() {
  return (
    <article>
      <Square>
        {size => (
          <Skeleton
            variant="rect"
            width="100%"
            height={size}
            data-testid="image-skeleton"
          />
        )}
      </Square>
      <Skeleton data-testid="image-title-skeleton" />
      <Skeleton width="60%" />
      <Skeleton width="40%" data-testid="image-author-skeleton" />
    </article>
  )
}

export default SkeletonCard
