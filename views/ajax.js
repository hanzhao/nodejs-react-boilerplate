'use strict'
import qwest from 'qwest'

const ajax = {
  get: async (url, data, options, before) => {
    options = options || {}
    data = data || {}
    Object.assign(options, { responseType: 'json' })
    Object.assign(data, { timestamp: Date.now() })
    let { response } = await qwest.get(url, data, options, before)
    return response
  },
  post: async (url, data, options, before) => {
    Object.assign(options || {}, { responseType: 'json' })
    let { response } = await qwest.post(url, data, options, before)
    return response
  }
}

export default ajax
