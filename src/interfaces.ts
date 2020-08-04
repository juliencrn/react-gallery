export interface ImageUrls {
  full: string
  thumb: string
  regular: string
}

export interface User {
  id: string
  name: string
  link: string
}

export interface ImageSrc {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}

export interface PexelsImage {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  src: ImageSrc
  liked: boolean
}
