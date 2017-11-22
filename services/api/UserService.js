import BaseApiService from './BaseApiService'
import config from '../../config'
import { encodeJSONAsStr } from '../../utils/encodeUtils'

class UserService extends BaseApiService
{
    constructor()
    {
        super(`${config.appId}/user`)
    }

    registerUser(email, password)
    {
        return this.post({ email, password })
    }

    updateUserCustomData(email, newCustomData)
    {
        const customDataStr = encodeJSONAsStr(newCustomData)

        return this.put(customDataStr, email)
    }

    getUserData({ email, accessToken })
    {
        this.headers.authorization = `Bearer ${accessToken}`
        return this.get(email)
    }
}

export default new UserService()
