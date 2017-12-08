import BaseApiService from './BaseApiService'

class AuthService extends BaseApiService {
  constructor() {
    super('auth')
  }

  async authenticateUser(email) {
    const accessToken = await this.post(email)

    const result = { accessToken, email }
    return result
  }
}

export default new AuthService()
