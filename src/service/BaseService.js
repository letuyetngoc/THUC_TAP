import axios from 'axios';
import { DOMAIN } from '../setting/setting';

const refreshToken = async (data) => {
    console.log('action')
    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    try {
        const result = await axios({
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('USER_LOGIN')).token}}`,
            },
            url: `${DOMAIN}/api/user/refreshToken`,
            method: 'POST',
            data: { refreshToken: data }
        })
        console.log('result refresh token', result.data.data)
        console.log('result  token', result.data.data.token)

        localStorage.setItem('USER_LOGIN', JSON.stringify({
            ...userLogin, token: result.data.data.token, expiresIn: result.data.data.expiresIn
        }))
        localStorage.setItem('ACCESS_TOKEN', result.data.data.token)

    } catch (error) {
        console.log('error', error)
    }
}

const checkToken = async () => {

    const timeRecent = Date.now()
    console.log('timeRecent', timeRecent)
    console.log('userLogin.expiresIn', JSON.parse(localStorage.getItem('USER_LOGIN'))?.expiresIn)

    if (JSON.parse(localStorage.getItem('USER_LOGIN'))?.expiresIn) {
        console.log('time start')
        if (timeRecent > JSON.parse(localStorage.getItem('USER_LOGIN')).expiresIn) {
            console.log('time start1')
            await refreshToken(JSON.parse(localStorage.getItem('USER_LOGIN')).refreshToken)
        }
    }
    return
}

export default class BaseService {
    constructor() {
    }
    get = async (url) => {
        await checkToken()
        return axios({
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
            },
            url: `${DOMAIN}/${url}`,
            method: 'GET'
        })
    }
    post = async (url, data) => {
        await checkToken()
        return axios({
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
            },
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data
        })
    }
}