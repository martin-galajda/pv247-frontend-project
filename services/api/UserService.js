import BaseApiService from './BaseApiService'
import config from '../../config'
import { encodeJSONAsStr, decodeStrAsJSON } from '../../utils/encodeUtils'

class UserService extends BaseApiService {
  constructor() {
    super(`${config.appId}/user`)
  }

  registerUser(email, password) {
    return this.post({ email, password })
  }

  async updateUserCustomData(email, newCustomData) {
    const customDataStr = encodeJSONAsStr(newCustomData)

    const user = await this.put(customDataStr, email)
    user.customData = user.customData ? decodeStrAsJSON(user.customData) : null
    return user
  }

  async getUserData({ email, accessToken }) {
    this.headers.authorization = `Bearer ${accessToken}`
    const user = await this.get(email)

    user.customData = user.customData ? decodeStrAsJSON(user.customData) : null
    return user
  }

  async listUsers() {
    const users = await this.get()

    return users.map(user => ({
      ...user,
      customData: user.customData ? decodeStrAsJSON(user.customData) : null,
    }))
  }
}

export default new UserService()
