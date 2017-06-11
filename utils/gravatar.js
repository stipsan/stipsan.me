import querystring from 'querystring'
import md5Hex from 'md5-o-matic'

const BASE_URL = 'https://gravatar.com/avatar/'

export default (email, opts) => {
  if (email.indexOf('@') === -1) {
    throw new Error('Please specify an email')
  }

  const query = querystring.stringify(opts)

  return (
    BASE_URL + md5Hex(email.toLowerCase().trim()) + (query ? `?${query}` : '')
  )
}
