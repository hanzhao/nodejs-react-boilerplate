'use strict'

import Promise from 'bluebird'
import fs from 'fs'
Promise.promisifyAll(fs)

import { Router } from 'express'
const router = Router()

router.get('/colors', (req, res) => {
  res.json({
    colors: ['pink', 'teal']
  })
})

router.get('*', (req, res) => {
  res.status(404).json({
    code: -1,
    error: 'Not found'
  })
})

export default router
