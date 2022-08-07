import { all } from 'redux-saga/effects'
import { folowDemoActionSaga } from './actionSaga/DemoActionSaga'

export default function* rootSaga() {
    yield all([
        folowDemoActionSaga(),
    ])
}
