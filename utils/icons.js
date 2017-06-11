import getGravatarUrl from './gravatar'

export const AppleTouchIcon = size => ({
  rel: 'apple-touch-icon',
  sizes: `${size}x${size}`,
  href: getGravatarUrl(size),
})

export const Icon = size => ({
  rel: 'icon',
  type: 'image/jpeg',
  sizes: `${size}x${size}`,
  href: getGravatarUrl(size),
})

export const TileImage = size => ({
  name: 'msapplication-TileImage',
  content: getGravatarUrl(size),
})
