import config from '../../config'

if (!global.fetch) {
  global.fetch = require('isomorphic-fetch')
}

/**
 * Helper function to parse response
 * because server unfortunately doesn't adhere to HTTP Content-negotiation flow.
 */
const parseResponseBody = response => {
  const contentType = response.headers.get('Content-Type')

  if (contentType && contentType.includes('text/plain')) {
    return response.text()
  } else if (contentType && contentType.includes('application/json')) {
    const json = response.json()
    return json
  }
  return ''
}

class BaseApiService {
  constructor(resourceName) {
    this.baseApiPath = config.baseApiPath
    this.resourceName = resourceName
    this.headers = {}
  }

  parseResponseBody(response) {
    return parseResponseBody(response)
  }

  getCommonHeaders() {
    const headers = {}
    if (localStorage.getItem('accessToken')) {
      headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }

    return headers
  }

  async get(id, pathToSubResource = '') {
    let url = `${this.baseApiPath}${this.resourceName}`

    if (id) {
      url += `/${id}`
    }

    if (pathToSubResource) {
      url += `/${pathToSubResource}`
    }

    const response = await fetch(url, {
      headers: this.getCommonHeaders(),
    })

    if (!response.ok) {
      const reason = await parseResponseBody(response)
      throw new Error(reason)
    }

    return parseResponseBody(response)
  }

  async delete(id, pathToSubResource = '') {
    let url = `${this.baseApiPath}${this.resourceName}/${id}`

    if (pathToSubResource) {
      url += `/${pathToSubResource}`
    }

    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.getCommonHeaders(),
    })


    if (!response.ok) {
      const reason = await parseResponseBody(response)
      throw new Error(reason)
    }

    return parseResponseBody(response)
  }

  async post(data, id = '', pathToSubResource = '') {
    let url = `${this.baseApiPath}${this.resourceName}`

    if (id) {
      url += `/${id}`
    }

    if (pathToSubResource) {
      url += `/${pathToSubResource}`
    }

    const headers = this.getCommonHeaders()

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: Object.assign({}, headers, {
        'Content-type': 'application/json',
      }),
    })

    if (!response.ok) {
      const reason = await parseResponseBody(response)
      throw new Error(reason)
    }

    return parseResponseBody(response)
  }

  async patch(data, id = '', pathToSubResource = '') {
    let url = `${this.baseApiPath}${this.resourceName}`

    if (id) {
      url += `/${id}`
    }

    if (pathToSubResource) {
      url += `/${pathToSubResource}`
    }

    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        ...this.getCommonHeaders(),
        'Content-type': 'application/json',
      },
    })

    if (!response.ok) {
      const reason = await parseResponseBody(response)
      throw new Error(reason)
    }

    return parseResponseBody(response)
  }

  async put(data, id = '', pathToSubResource = '') {
    let url = `${this.baseApiPath}${this.resourceName}`

    if (id) {
      url += `/${id}`
    }

    if (pathToSubResource) {
      url += `/${pathToSubResource}`
    }


    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: Object.assign({}, this.getCommonHeaders(), {
        'Content-type': 'application/json',
      }),
    })

    if (!response.ok) {
      const reason = await parseResponseBody(response)
      throw new Error(reason)
    }

    return parseResponseBody(response)
  }
}

export default BaseApiService
