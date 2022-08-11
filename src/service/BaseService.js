import axios from 'axios';

export default class BaseService {
    constructor() {

    }



    get = (url) => {

        return axios({
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
            },
            url: `https://test.dk-tech.vn/${url}`,
            method: 'GET'
        })
    }
    post = (url, data) => {

        const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
        const timeRecent = Date.now()

        console.log('timeRecent', timeRecent)
        console.log('userLogin', userLogin.expiresIn)

        if (timeRecent > userLogin.expiresIn) {

            console.log('time')

            const refreshToken = (data) => {
                return async () => {

                    console.log('action refreshToken')
                    try {
                        const result = await axios({
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
                            },
                            url: `https://test.dk-tech.vn/api/user/refreshToken`,
                            method: 'POST',
                            data, data
                        })
                        console.log('result refresh token', result)

                    } catch (error) {
                        console.log('error', error)
                    }
                }
            }
            refreshToken(userLogin.refreshToken)
        } else {
            return axios({
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
                },
                url: `https://test.dk-tech.vn/${url}`,
                method: 'POST',
                data
            })
        }





    }
}