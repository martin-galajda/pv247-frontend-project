import BaseApiService from './BaseApiService'
import config from '../../config'
import Promise from 'bluebird'

class AuthService extends BaseApiService
{
    constructor()
    {
        super('auth')
    }

    async authenticateUser(email, password)
    {
        const accessToken = await this.post(email)

        const result = { accessToken, email }
        console.log(result)
        return result
    }
}

export default new AuthService()
