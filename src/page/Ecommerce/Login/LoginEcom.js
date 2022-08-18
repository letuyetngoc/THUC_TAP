import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { AiFillApple, AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { VscKey } from 'react-icons/vsc';
import { history } from '../../../App';
import { errorMessage, successMessage } from '../../../component/message';
import { userService } from '../../../service/UserServicer';


export default function LoginEcom() {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    //action
    const login = (data) => {
        return async (dispatch) => {
            try {
                const result = await userService.login(data)

                console.log('result', result.data.data.id)

                successMessage('Success', result.data.message)

                localStorage.setItem('ACCESS_TOKEN', result.data.data.token)
                localStorage.setItem('USER_LOGIN', JSON.stringify(result.data.data))

                if (result.data.data.id == 1) {
                    history.push('/admin/userkyc')
                } else {
                    history.push('/ecommerce/home')
                }

            } catch (error) {
                console.log('error', error)
                errorMessage('Error', error.response.data.message || '')
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        values[name] = value
        setValues({ ...values })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(values))
    }

    return (
        <div className='loginEcom'>
            <div className='loginEcom__content'>
                <form>
                    <h2>Login</h2>
                    <hr />
                    <div className='logo'>
                        <AiFillApple className='icon' />
                        Brand
                    </div>
                    <div className='content_require'>
                        <p>Enter your email number and password to
                            Sign in! </p>
                    </div>
                    <div className='content_input'>
                        <div className='input_item'>
                            <AiOutlineMail className='icon' />
                            <input onChange={handleChange} name='email' placeholder='Email' />
                        </div>
                        <br />
                        <div className='input_item'>
                            <VscKey className='icon' />
                            <input onChange={handleChange} name='password' type='password' placeholder='Password' />
                            <div />
                        </div>
                        <div className='content_text'>
                            <p >You don't have an account? <span onClick={() => history.push('/ecommerce/register')}>Sign up</span></p>
                            <p >Forgot password?</p>
                        </div>
                        <div className='btn_login' onClick={handleSubmit}>Log in</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
