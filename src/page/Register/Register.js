import React, { useEffect } from 'react'
import { Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReferral } from '../../redux/action/UserAction';
import { errorMessage, successMessage } from '../../component/message';
import { history } from '../../App';
import { userService } from '../../service/UserServicer';

export default function Register(props) {

    const dispatch = useDispatch()
    let { id } = useSelector(state => state.UseReducer)
    const [iconLoading, setIconLogin] = useState(false)

    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    console.log('userLogin', userLogin)

    //action

    const signup = (data) => {
        return async () => {
            try {
                setIconLogin(true)
                const result = await userService.signup(data)
                console.log('result', result)
                successMessage('Success', result.data.message)
                setIconLogin(false)
                // history.push(`/verify/${userLogin}`)

            } catch (error) {
                console.log('error', error)
                errorMessage('Error', error.response.data.message)
            }
        }
    }

    const [state, setState] = useState({
        values: {
            referral: '',
            email: '',
            password: '',
            userName: '',
            confirmPassword: ''
        },
        errors: {
            email: '',
            password: '',
            userName: '',
            confirmPassword: ''
        }
    })

    useEffect(() => {
        dispatch(getReferral)
    }, [])

    const handleChange = (e) => {
        state.values[e.target.name] = e.target.value
        setState({ ...state })
        let message = ''

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (e.target.value === '') {
            message = 'Not be empty!'
        }

        if (e.target.name == 'email') {
            if (!regexEmail.test(e.target.value)) {
                message = 'Email invalidate!'
            }
        }
        if (e.target.name == 'confirmPassword') {
            if (state.values.password != state.values.confirmPassword) {
                message = 'Password does not match'
            }
        }

        state.errors[e.target.name] = message
        setState({ ...state })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        state.values.referral = props.match.params.id || id
        // console.log('state', state)

        for (let i in state.values) {
            if (state.values[i] == '') {
                errorMessage('Error', 'You need to fill in all the information!')
                return
            }
        }

        for (let i in state.errors) {
            if (state.errors[i] != '') {
                errorMessage('Error', 'Invalid information!')
                return
            }
        }


        dispatch(signup(state.values))
    }

    return (
        <div className='register'>
            <div className='register_content'>
                <h1>Create your acount</h1>
                <form>
                    <Input onChange={handleChange} placeholder="Enter your name" value={state.values.userName} name='userName' />
                    <p className='error_message'>{state.errors.userName}</p>
                    <br />
                    <Input onChange={handleChange} placeholder="Enter your email" value={state.values.email} name='email' />
                    <p className='error_message'>{state.errors.email}</p>
                    <br />
                    <Input.Password onChange={handleChange} placeholder="Enter your password" value={state.values.password} name='password' />
                    <p className='error_message'>{state.errors.password}</p>
                    <br />
                    <Input.Password onChange={handleChange} placeholder="Confirm password" value={state.values.confirmPassword} name='confirmPassword' />
                    <p className='error_message'>{state.errors.confirmPassword}</p>
                    <br />
                    <Input placeholder="ID" disabled value={props.match.params.id || id} name='referral' />
                    <p >You have an account? <span onClick={() => history.push('/login')}>Sign in</span></p>
                    <button onClick={handleSubmit} type='submit' className='btn_submit'>
                        {iconLoading && <div className='icon_loading'>
                            <LoadingOutlined />
                        </div>}
                        Create
                    </button>

                </form>
            </div>
        </div >
    )
}
