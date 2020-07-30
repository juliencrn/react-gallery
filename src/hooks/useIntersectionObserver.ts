import { useEffect, useState, useRef } from 'react'

/**
 * @credits https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
 */

interface ExtendedEntry extends IntersectionObserverEntry {
  isVisible: boolean
}

interface Args extends IntersectionObserverInit {
  onAppearOnly?: boolean
}

type Return<T> = [(node: T) => void, ExtendedEntry?]

function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  onAppearOnly = false,
}: Args): Return<T> {
  const [entry, setEntry] = useState<ExtendedEntry>()
  const [node, setNode] = useState<T>()
  const observer = useRef<IntersectionObserver | null>(null)

  const noUpdate = entry?.isVisible && onAppearOnly

  useEffect(() => {
    if (!window?.IntersectionObserver || noUpdate) return

    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const isVisible = entries[0].intersectionRatio > 0
        setEntry({ ...entries[0], isVisible })
      },
      {
        threshold,
        root,
        rootMargin,
      },
    )

    // Ensure the rest of useEffect use the same observer
    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node)

    return () => {
      currentObserver.disconnect()
    }
  }, [node, threshold, root, rootMargin, noUpdate])

  return [setNode, entry]
}

export default useIntersectionObserver
