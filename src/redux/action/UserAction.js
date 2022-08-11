import { APPROVED_STATUS, GET_COUNTRY, GET_ID, GET_PARENT, PENDING_STATUS } from "../type/userTypes"
import { errorMessage, successMessage } from "../../component/message";
import { userService } from "../../service/UserServicer";
import { history } from '../../App'

export const getReferral = async (dispatch) => {
    try {
        const result = await userService.getReferral()
        dispatch({ type: GET_ID, payload: result.data.data })
    }
    catch (error) {
        console.log('error', error)
    }
}

export const signup = (data) => {
    return async () => {
        try {
            const result = await userService.signup(data)
            successMessage('Success', result.message)
            history.push('/login')

        } catch (error) {
            console.log('error', error.response.data.message)
            errorMessage('Error', error.response.data.message)
        }
    }
}

export const login = (data) => {
    return async (dispatch) => {
        try {

            const result = await userService.login(data)

            console.log('result', result.data.data.id)

            successMessage('Success', result.data.message)

            localStorage.setItem('ACCESS_TOKEN', result.data.data.token)
            localStorage.setItem('USER_LOGIN', JSON.stringify(result.data.data))

            if (result.data.data.id == 1) {
                history.push('/manage')
            } else {
                history.push('/admin/users')
            }

        } catch (error) {
            console.log('error', error)
            errorMessage('Error', error.response.data.message || '')
        }
    }
}

export const getParent = (data) => {
    return async (dispatch) => {
        try {
            const result = await userService.getParent(data)
            // console.log('result', result.data.data.data)
            dispatch({ type: GET_PARENT, payload: result.data.data.data })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const checkKycUser = (data) => {
    return async (dispatch) => {
        try {
            const result = await userService.checkKycUser(data)
            console.log('result check', result)

            if (result.data.data == 'PENDING') {
                dispatch({ type: PENDING_STATUS })
                successMessage('Waiting for admin approval!')
            }
            if (result.data.data == 'APPROVED') {
                dispatch({ type: APPROVED_STATUS })
                successMessage('Admin has approved your information!')
            }
            if (result.data.data == 'CANCEL') {
                dispatch({ type: APPROVED_STATUS })
                successMessage('Admin does not approve your information!')
            }

        } catch (error) {
            console.log('error kyc', error)
        }
    }
}

export const kycUser = (data) => {
    return async (dispatch) => {
        try {
            const result = await userService.kycUser(data)
            console.log('result', result)
            successMessage(result.data.message)

        } catch (error) {
            console.log('error', error)
            errorMessage('Error', error.response.data.message)
        }
    }
}

export const changePassword = (data) => {
    return async (dispatch) => {
        try {
            const result = await userService.changePassword(data)
            successMessage('Success', result.data.message)
        } catch (error) {
            console.log('error', error)
            errorMessage('Error', error.response.data.message)
        }
    }
}

export const getCountry = async (dispatch) => {
    try {
        const result = await userService.getCountry()

        dispatch({ type: GET_COUNTRY, payload: result.data.data })

    } catch (error) {
        console.log('error', error)
    }
}

// export const refreshToken = (data) => {
//     return async () => {
//         try {
//             const result = await userService.refreshToken(data)
//             console.log('result refresh token', result)

//         } catch (error) {
//             console.log('error', error)
//         }
//     }
// }