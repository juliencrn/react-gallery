import { RefObject, useState, useEffect } from 'react'
import useEventListener from './useEventListener'

interface Size {
  width: number
  height: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>,
): Size {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  })

  const updateSize = () => {
    const node = elementRef?.current
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      })
    }
  }

  // initial size
  useEffect(() => {
    updateSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEventListener('resize', updateSize)

  return size
}

export default useElementSize
