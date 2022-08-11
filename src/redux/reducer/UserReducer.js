import { APPROVED_STATUS, GET_COUNTRY, GET_ID, GET_PARENT, PENDING_STATUS } from "../type/userTypes"

const stateDefault = {
    id: '',
    arrParent: [],
    arrCountry: [],
    isDisable: false
}
export default function UseReducer(state = stateDefault, action) {
    switch (action.type) {
        case GET_ID: {
            state.id = action.payload
            return { ...state }
        }
        case GET_PARENT: {
            state.arrParent = action.payload
            return { ...state }
        }
        case GET_COUNTRY: {
            state.arrCountry = action.payload
            return { ...state }
        }
        case PENDING_STATUS: {
            state.isDisable = true
            return { ...state }
        }
        case APPROVED_STATUS: {
            state.isDisable = false
            return { ...state }
        }
        default: return { ...state }
    }
}