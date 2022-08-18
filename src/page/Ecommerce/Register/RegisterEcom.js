import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//icon
import { AiFillApple, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { VscKey } from 'react-icons/vsc';
import { LoadingOutlined } from '@ant-design/icons'

import { history } from '../../../App'
import { userService } from '../../../service/UserServicer';
import { errorMessage, successMessage } from '../../../component/message';
import { useState } from 'react';

export default function Register() {

    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(false)
    const [getReferralId, setGetReferralId] = useState()

    const [state, setState] = useState({
        values: {
            email: '',
            password: '',
            userName: '',
            referral: getReferralId
        },
        errors: {
            email: '',
            password: '',
            userName: '',
            conFirmPassword: ''
        }
    })

    //action

    const getReferral = async (dispatch) => {
        try {
            const result = await userService.getReferral()
            setGetReferralId(result.data.data)
        }
        catch (error) {
            console.log('error', error)
        }
    }

    const signup = (data) => {
        return async () => {
            try {
                setIsloading(true)
                const result = await userService.signup(data)
                // console.log('result', result)
                successMessage('Success', result.data.message)
                setIsloading(false)
                history.push('/ecommerce/home')

            } catch (error) {
                console.log('error', error.response.data.message)
                errorMessage('Error', error.response.data.message)
            }
        }
    }

    useEffect(() => {
        dispatch(getReferral)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        state.values[name] = value
        setState({ ...state })

        let errorMessage = ''
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (value == '') {
            errorMessage = 'Not be empty!'
        }

        if (name == 'email') {
            if (!emailRegex.test(value)) {
                errorMessage = 'Email invalidate!'
            }
        }
        if (name == 'conFirmPassword') {
            if (value != state.values.password) {
                errorMessage = 'Password does not match!'
            }
        }
        state.errors[name] = errorMessage
        return setState({ ...state })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        state.values.referral = getReferralId
        dispatch(signup(state.values))
    }
    return (
        <div className='register'>
            <div className='register__content'>
                <form>
                    <h2>Register</h2>
                    <hr />
                    <div className='logo'>
                        <AiFillApple className='icon' />
                        Brand
                    </div>
                    <div className='content_require'>
                        <p>Enter your phone number and password to
                            Sign in! </p>
                    </div>
                    <div className='content_input'>
                        <div className='input_item'>
                            <BsPhone className='icon' />
                            <input placeholder='ID' disabled defaultValue={getReferralId} />
                        </div>
                        <br />
                        <div className='input_item'>
                            <AiOutlineUser className='icon' />
                            <input onChange={handleChange} placeholder='Name' name='userName' />
                            <p className='error'>{state.errors.userName}</p>
                        </div>
                        <br />
                        <div className='input_item'>
                            <AiOutlineMail className='icon' />
                            <input onChange={handleChange} placeholder='Email' name='email' />
                            <p className='error'>{state.errors.email}</p>
                        </div>
                        <br />
                        <div className='input_item'>
                            <VscKey className='icon' />
                            <input onChange={handleChange} placeholder='Password' type='password' name='password' />
                            <p className='error'>{state.errors.password}</p>
                        </div>
                        <br />
                        <div className='input_item'>
                            <VscKey className='icon' />
                            <input onChange={handleChange} placeholder='Confirm password' type='password' name='conFirmPassword' />
                            <p className='error'>{state.errors.conFirmPassword}</p>
                        </div>
                        <p className='content_text'>You have an acount? <span onClick={() => history.push('/ecommerce/login')}>Login</span></p>
                        <div className='btn_login' onClick={handleSubmit}>
                            {isLoading && <LoadingOutlined className='icon' />}
                            Sign up
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
