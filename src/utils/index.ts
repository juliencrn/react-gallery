type Truncate = (string: string, length?: number) => string

export const truncate: Truncate = (string, length = 55) => {
  if (string.length > length) {
    return `${string.slice(0, length - 5).trim()} [...]`
  }
  return string
}
