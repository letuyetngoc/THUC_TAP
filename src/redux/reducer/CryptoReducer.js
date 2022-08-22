import { GET_NAME_COIN } from "../type/criptoTypes"

const stateDefault = {
    nameCoin: 'Bitcoin',
    isModal: false
}
export default function CryptoReducer(state = stateDefault, action) {
    switch (action.type) {
        case GET_NAME_COIN: {
            state.nameCoin = action.payload.nameCoin
            state.isModal = action.payload.isModal
            return { ...state }
        }
        default: return { ...state }
    }
}