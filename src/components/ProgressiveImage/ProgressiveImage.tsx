import React, { CSSProperties } from 'react'

import Skeleton from '@material-ui/lab/Skeleton'

import useImageOnLoad from '../../hooks/useImageOnLoad'
import Square from '../Square'

export interface ProgressiveImageProps {
  url?: string
  thumbUrl?: string
  alt?: string
  isVisible: boolean
}

function ProgressiveImage({
  url = '',
  thumbUrl = '',
  alt = '',
  isVisible,
}: ProgressiveImageProps) {
  const { handleImageOnLoad, thumbStyle, fullImageStyle } = useImageOnLoad()

  const imageStyle: CSSProperties = {
    objectFit: 'cover',
    position: 'absolute',
  }

  const canLoad = isVisible && url && thumbUrl

  return (
    <Square>
      {size =>
        canLoad ? (
          <>
            <img
              style={{ ...thumbStyle, height: size, ...imageStyle }}
              data-testid="thumb-image"
              src={thumbUrl}
              alt={alt || ''}
              width="100%"
            />
            <img
              onLoad={handleImageOnLoad}
              style={{ ...fullImageStyle, height: size, ...imageStyle }}
              data-testid="regular-image"
              src={url}
              alt={alt || ''}
              width="100%"
            />
          </>
        ) : (
          <Skeleton
            variant="rect"
            width="100%"
            height={size}
            data-testid="image-skeleton"
          />
        )
      }
    </Square>
  )
}

export default ProgressiveImage
