import React from 'react'
import { userService } from '../../service/UserServicer'
import { useDispatch } from 'react-redux'
import { errorMessage, successMessage } from '../../component/message'
import { history } from '../../App'

export default function VerifyEmail(props) {
    console.log('props', props.match.params.token)
    localStorage.setItem('ACCESS_TOKEN', props.match.params.token)

    const dispatch = useDispatch()

    const verifyEmail = () => {
        return async () => {
            try {
                const result = await userService.verifyEmail()
                console.log('result', result)
                localStorage.removeItem('ACCESS_TOKEN')

                successMessage('Success', result.data.message)

                localStorage.setItem('USER_LOGIN', JSON.stringify(result.data.data))
                localStorage.setItem('ACCESS_TOKEN', result.data.data.token)

                history.push('/admin/users')

            } catch (error) {
                console.log('error', error)
                errorMessage('Error', error.response.data.message)
                localStorage.removeItem('ACCESS_TOKEN')
            }
        }
    }
    const handleVerifyMail = () => {
        dispatch(verifyEmail())
    }
    return (
        <div className='verifyEmail'>
            <div className='verifyEmail__header'>
                <h4>Thanks for signing up.</h4>
                <h3>Verify Your E-mail Address.</h3>
            </div>
            <div className='verifyEmail__content'>
                <p>
                    You're almost ready to get started. Please click on the button below to verify your email address and enjoy our website!
                </p>
                <div onClick={handleVerifyMail} className='btn_verify' >Verify your email</div>
                <p>
                    Thanks,
                </p>
                <p>
                    The company team.
                </p>
            </div>
        </div>
    )
}
