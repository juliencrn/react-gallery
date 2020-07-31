import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Square from '../Square'

function SkeletonCard() {
  return (
    <article>
      <Card>
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
        <CardContent>
          <Skeleton data-testid="image-title-skeleton" width="70%" />
        </CardContent>
      </Card>
    </article>
  )
}

export default SkeletonCard
