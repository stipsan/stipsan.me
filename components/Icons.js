export const AppleTouchIcon = ({ size }) =>
  <link
    rel="apple-touch-icon"
    sizes={`${size}x${size}`}
    href="http://mysite.com/img/apple-touch-icon-57x57.png"
  />

export const Icon = ({ size }) =>
  <link
    rel="icon"
    type="image/png"
    href="/favicons/icon-32.png"
    sizes={`${size}x${size}`}
  />

export const TileImage = ({ size }) =>
  <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
