import React, { CSSProperties } from 'react'

import useImageOnLoad from '../../hooks/useImageOnLoad'
import Square from '../Square'

export interface ProgressiveImageProps {
  url: string
  thumbUrl: string
  alt?: string
  isVisible: boolean
}

function ProgressiveImage({
  url,
  thumbUrl,
  alt = '',
  isVisible,
}: ProgressiveImageProps) {
  const { handleImageOnLoad, thumbStyle, fullImageStyle } = useImageOnLoad()

  const imageStyle: CSSProperties = {
    objectFit: 'cover',
    position: 'absolute',
  }

  return (
    <Square>
      {size =>
        isVisible && (
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
        )
      }
    </Square>
  )
}

export default ProgressiveImage
