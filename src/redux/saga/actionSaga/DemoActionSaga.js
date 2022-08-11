// import { put, call, takeLatest } from 'redux-saga/effects'
// import { DEMO_ACTION_SAGA } from '../typeSaga/DemoTypes'
// import axios from "axios"
// import { DEMO_ACTION } from '../../type/typeDemo'

// function* DemoActionSaga() {
//     try {
//         const result = yield call(() => axios({
//             method: 'GET',
//             url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien'
//         }))
//         console.log('result', result)
//         yield put({
//             type: DEMO_ACTION,
//             payload: result.data
//         })
//     } catch (error) {
//         console.log('error', error)
//     }
// }
// export function* folowDemoActionSaga() {
//     yield takeLatest(DEMO_ACTION_SAGA, DemoActionSaga)
// } 