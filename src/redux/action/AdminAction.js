import { errorMessage, successMessage } from "../../component/message"
import { adminService } from "../../service/AdminService"
import { GET_ALL_USER_KYC } from "../type/userTypes"

export const getAllUserKyc = (data) => {
    return async (dispatch) => {
        try {
            const result = await adminService.getAllUserKyc(data)
            dispatch({ type: GET_ALL_USER_KYC, payload: result.data.data.array })
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const updateKyc = (data) => {
    return async (dispatch) => {
        try {
            const result = await adminService.updateKyc(data)
            console.log('result', result)
            successMessage('Success', result.data.message)
            dispatch(getAllUserKyc({
                limit: "1000",
                page: "1"
            }))

        }
        catch (error) {
            console.log('error', error)
            errorMessage('Error', error.response.data.message)
        }
    }
}
export const sreachListUserKyc = (data) => {
    return () => {
        try {

        } catch (error) {
            console.log('error', error)
        }
    }
}
