import BaseApiService from './BaseApiService'
import config from '../../config'
import { encodeJSONAsStr, decodeStrAsJSON } from '../../utils/encodeUtils'
import { clone, omit } from 'ramda'

class ChannelService extends BaseApiService {
  constructor() {
    super(`app/${config.appId}/channel`)
  }

  async getChannelMessages(channelId) {
    const pathToSubResource = 'message'

    const messages = await this.get(channelId, pathToSubResource)

    return messages.map(message => {
      message.value = decodeStrAsJSON(message.value)

      return message
    })
  }

  async addChannelMessage(channelId, messageData) {
    const pathToSubResource = 'message'
    const newMessageData = clone(messageData)

    newMessageData.value = encodeJSONAsStr(newMessageData.value)

    const responseMessage = await this.post(newMessageData, channelId, pathToSubResource)
    responseMessage.value = decodeStrAsJSON(responseMessage.value)
    return responseMessage
  }

  async removeChannelMessage(channelId, messageId) {
    const pathToSubResource = `message/${messageId}`
    const response = await this.delete(channelId, pathToSubResource)
    return response
  }

  async updateChannelMessage(newData, channelId) {
    const pathToSubResource = `message/${newData.id}`

    const newMessageData = omit(['id'], clone(newData))
    newMessageData.value = encodeJSONAsStr(newMessageData.value)
    newMessageData.customData = ''

    const responseMessage = await this.put(newMessageData, channelId, pathToSubResource)
    responseMessage.value = decodeStrAsJSON(responseMessage.value)
    return responseMessage
  }
}

export default new ChannelService()
