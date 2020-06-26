export interface ImageUrls {
  full: string
  thumb: string
}

export interface User {
  id: string
  name: string
  link: string
}

export interface Image {
  id: string
  title: string
  user: User
  imageUrls: ImageUrls
  alt_description?: string
  link: string
}
