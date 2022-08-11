import React from 'react'
import { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { errorMessage } from '../../component/message';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/action/UserAction';
import UserForm from '../../component/form/UserForm';


export default function AdminForm() {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        formPassword: {
            password: '',
            newPassword: '',
            confirmNewPassword: ''
        }
    })

    const handleChangeFormPassword = (e) => {
        state.formPassword[e.target.name] = e.target.value
        setState({ ...state })
    }
    const submitChangePassword = (e) => {
        e.preventDefault()
        if (state.formPassword.newPassword != state.formPassword.confirmNewPassword) {
            errorMessage('Error', 'Password is not match!')
        } else (
            dispatch(changePassword(state.formPassword))
        )
    }

    return (
        <div className='adminForm'>
            <div className='formPassword'>
                <h2>Change password</h2>
                <div className="form-group">
                    <label >Current password</label>
                    <Input.Password
                        onChange={handleChangeFormPassword}
                        value={state.formPassword.password}
                        name='password'
                        placeholder="Input current password"
                        iconRender={(visible) => (visible ? <EyeTwoTone style={{ fontSize: '15px' }} /> : <EyeInvisibleOutlined />)}
                    />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >New password</label>
                    <Input.Password
                        value={state.formPassword.newPassword}
                        onChange={handleChangeFormPassword}
                        name='newPassword'
                        placeholder="Input new password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Confirm new password</label>
                    <Input.Password
                        value={state.formPassword.confirmNewPassword}
                        onChange={handleChangeFormPassword}
                        name='confirmNewPassword'
                        placeholder="Confirm new password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <small className="form-text text-muted"></small>
                </div>
                <button className='btn_submitChangePassword' onClick={submitChangePassword}>Submit</button>
            </div>
            {/* <UserForm /> */}
        </div>
    )
}

