import { DEMO_ACTION } from "../type/typeDemo"

const stateDefault = {
    arr: ['Python'],
}
const DemoReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DEMO_ACTION: {
            state.arr = action.payload
            return { ...state }
        }
        default: return state
    }
}
export default DemoReducer