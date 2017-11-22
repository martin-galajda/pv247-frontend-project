import BaseApiService from './BaseApiService'
import config from '../../config'
import { encodeJSONAsStr } from '../../utils/encodeUtils'
import { clone } from 'ramda'

class ChannelService extends BaseApiService
{
    constructor()
    {
        super(`app/${config.appId}/channel`)
    }

    getChannelMessages(channelId)
    {
        const pathToSubResource = `message`
        
        return this.get(channelId, pathToSubResource)
    }

    addChannelMessage(channelId, messageData)
    {
        const pathToSubResource = `message`
        const newMessageData = clone(messageData)

        console.log(messageData)

        newMessageData.value = encodeJSONAsStr(newMessageData.value)
        
        return this.post(newMessageData, channelId, pathToSubResource)
    }

    removeChannelMessage(channelId, messageId)
    {
        const pathToSubResource = `message/${messageId}`

        return this.delete(channelId, pathToSubResource)
    }

    updateChannelMessage(newData, channelId, messageId)
    {
        const pathToSubResource = `message/${messageId}`
        
        const newMessageData = clone(newData)
        newMessageData.value = encodeJSONAsStr(newMessageData.value)

        return this.put(newMessageData, channelId, pathToSubResource)
    }
}

export default new ChannelService()
