import React, { useState } from 'react'
import { Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { history } from '../../App';
import { login } from '../../redux/action/UserAction';

export default function Login() {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        state[e.target.name] = e.target.value
        setState({ ...state })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(state))
    }
    return (
        <div className='login'>
            <div className='login_content'>
                <h1>Log in</h1>
                <form>
                    <Input onChange={handleChange} placeholder="Enter your email" name='email' />
                    <br /> <br />
                    <Input.Password onChange={handleChange} placeholder="Enter your password" name='password' />
                    <p>You don't have an account? <span onClick={() => history.push('./register')}>Sign up</span></p>
                    <button onClick={handleSubmit} type='submit' className='btn_submit'>Sign in</button>

                </form>
            </div>
        </div>
    )
}
