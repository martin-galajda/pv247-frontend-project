import BaseApiService from './BaseApiService'

class FileService extends BaseApiService {
  constructor() {
    super('file')
  }

  uploadFile(data) {
    return this.postFormData(data)
  }

  getFile(fileId) {
    return this.get(fileId)
  }

  getFileDownloadLink(fileId) {
    const pathToSubResource = 'download-link'
    return this.get(fileId, pathToSubResource)
  }

  async postFormData(form) {
    const url = `${this.baseApiPath}${this.resourceName}`

    const headers = this.getCommonHeaders()

    const response = await fetch(url, {
      method: 'POST',
      body: form,
      headers: Object.assign({}, headers, {
        Accept: 'application/json',
      }),
    })

    if (!response.ok) {
      const reason = await this.parseResponseBody(response)
      throw new Error(reason)
    }

    return this.parseResponseBody(response)
  }
}

export default new FileService()
