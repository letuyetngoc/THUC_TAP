import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEMO_ACTION_SAGA } from '../redux/saga/typeSaga/DemoTypes'

export default function Demo() {
    const { arr } = useSelector(state => state.DemoReducer)
    console.log('arr', arr)
    const dispatch = useDispatch()

    return (
        <div className='demo'>
            <button onClick={() => dispatch({ type: DEMO_ACTION_SAGA })}>Click!</button>
        </div>
    )
}
