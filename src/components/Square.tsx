import React, { useRef, ReactNode, CSSProperties } from 'react'

import useElementSize from '../hooks/useElementSize'

export interface SquareProps {
  children: (size: number) => ReactNode
}

/**
 * Make a square from DOM parent width
 * @return Function as a child with "size:boolean" param
 */
function Square({ children }: SquareProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const { width } = useElementSize(rootRef)

  const style: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: width,
  }

  return (
    <div ref={rootRef} style={style}>
      {children(width)}
    </div>
  )
}

export default Square
