import { post } from 'axios'

// datos cuenta de Blizzard
const clientId = '1c600a1a62174d8da26873a01b2dca50'
const clientSecret = 'KCGOjMiNYrhOT36MQWvmkFFdYozEa9Ck'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
