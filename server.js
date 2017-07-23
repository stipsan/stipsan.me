/* eslint-disable no-console */

const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  // 1 hour
  maxAge: 1000 * 60 * 60,
})

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      renderAndCache(req, res, '/')
    })

    server.get('/about', (req, res) => {
      renderAndCache(req, res, '/about')
    })

    server.get('/projects', (req, res) => {
      renderAndCache(req, res, '/projects')
    })

    server.get('/writings', (req, res) => {
      renderAndCache(req, res, '/writings')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      if (!process.env.NOW) {
        console.log('> Ready on http://localhost:3000')
      }
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

function getCacheKey(req) {
  return `${req.url}`
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key) && !dev) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
