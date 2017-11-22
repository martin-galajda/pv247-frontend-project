import BaseApiService from './BaseApiService'
import config from '../../config'
import { encodeJSONAsStr } from '../../utils/encodeUtils'
import { clone } from 'ramda'
import uuidv4 from 'uuid/v4'

const OPERATIONS = {
    ADD_CHANNEL: 'add',
    REMOVE_CHANNEL: 'remove',
    REPLACE_CHANNEL: 'replace',
}

const CHANNELS_PATH = '/channels'

class AppService extends BaseApiService
{
    constructor()
    {
        super('app')
        this.appId = config.appId
    }

    getApplicationData()
    {
        const applicationData = this.get(this.appId)
        return applicationData
    }

    patchApplicationData(data)
    {
        const applicationData = this.patch(data, this.appId)
        return applicationData
    }

    addChannel(channelData)
    {
        const newChannelData = clone(channelData)
        newChannelData.customData = encodeJSONAsStr(newChannelData.customData)
        return this.patchApplicationData([{
            op: OPERATIONS.ADD_CHANNEL,
            path: `${CHANNELS_PATH}/-`,
            value: {
                ...newChannelData,
                id: uuidv4(),
            },
        }])
    }

    removeChannel(channelId)
    {
        return this.patchApplicationData([{
            op: OPERATIONS.REMOVE_CHANNEL,
            path: `${CHANNELS_PATH}/${channelId}`,
            value: {
                id: channelId,
            }
        }])
    }

    replaceChannel(channelData)
    {
        const newChannelData = clone(channelData)
        newChannelData.customData = encodeJSONAsStr(newChannelData.customData)

        return this.patchApplicationData({
            op: OPERATIONS.REPLACE_CHANNEL,
            path: `${CHANNELS_PATH}`,
            value: newChannelData,
        })
    }
}

export default new AppService()
