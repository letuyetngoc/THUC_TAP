import { GET_ALL_USER_KYC } from "../type/userTypes"

const stateDefault = {
    arrUserKYC: []
}
const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_USER_KYC: {
            state.arrUserKYC = action.payload
            return { ...state }
        }
        default: return { ...state }
    }
}
export default AdminReducer