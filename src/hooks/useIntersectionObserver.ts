import { useEffect, RefObject, useState } from 'react'

export type IntersectionStatus = {
  isIntersecting: boolean
}

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
}

function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  element: RefObject<T>,
  options: IntersectionObserverInit = defaultOptions,
): IntersectionStatus {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const target = element?.current

  useEffect(() => {
    if (!target) {
      return
    }

    const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting) {
        observer.unobserve(target)
      }
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      options,
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [target, options])

  return { isIntersecting }
}

export default useIntersectionObserver
