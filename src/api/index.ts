import data from './unsplash-spain.json'
import { Image } from '../interfaces'

// normalize data
function flattenData(): Image[] {
  return data.results.map(
    ({ id, description, alt_description, urls, links, user }) => ({
      id,
      title: description || alt_description || 'no',
      user: {
        id: user.id,
        name: user.name,
        link: user.portfolio_url || '',
      },
      imageUrls: {
        full: urls.full,
        regular: urls.regular,
        thumb: urls.thumb,
      },
      alt_description: alt_description || '',
      link: links.html,
    }),
  )
}

// Fake api method
export function getImages(delay?: number): Promise<Image[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const images = flattenData()
      resolve(images)
    }, delay || 1000)
  })
}
