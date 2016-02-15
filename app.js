'use strict'
import Promise from 'bluebird'
global.Promise = Promise
global.ROOT = __dirname

import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import favicon from 'serve-favicon'
import methodOverride from 'method-override'

import webpack from 'webpack'
import webpackConfig from './webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000

/* Set up express */
let app = express()
app.locals.ENV = env
app.locals.ENV_DEVELOPMENT = env == 'development'
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(methodOverride())
/* Static assets */
if (env == 'development') {
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  }))
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use(favicon(`${ROOT}/public/favicon.ico`))
  app.use('/public', express.static(`${ROOT}/public`))
}

/* Set up controllers */
import apiController from './controllers/api'
app.use('/api', apiController)
import rootController from './controllers/root'
app.use(rootController)

app.use((err, req, res, next) => {
  res.status(500).send(err.stack)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
