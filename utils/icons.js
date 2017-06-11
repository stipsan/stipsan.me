export const AppleTouchIcon = size => ({
  rel: 'apple-touch-icon',
  sizes: `${size}x${size}`,
  href: 'http://mysite.com/img/apple-touch-icon-57x57.png',
})

export const Icon = size => ({
  rel: 'icon',
  type: 'image/png',
  sizes: `${size}x${size}`,
  href: 'http://mysite.com/img/apple-touch-icon-57x57.png',
})

export const TileImage = size => ({
  name: 'msapplication-TileImage',
  content: '/favicons/mstile-144x144.png',
})
