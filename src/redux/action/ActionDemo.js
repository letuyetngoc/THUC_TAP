import axios from "axios"
import { DEMO_ACTION } from "../type/typeDemo"

export const handleActionDemo = async (dispatch) => {
    try {
        const result = await axios({
            method: 'GET',
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien'
        })
        dispatch({
            type: DEMO_ACTION,
            payload: result.data
        })
    } catch (error) {
        console.log('error', error)
    }
}