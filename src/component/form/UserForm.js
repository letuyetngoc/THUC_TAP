import React, { useEffect } from 'react'
import { useState } from 'react'
import { Select } from 'antd'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry, kycUser } from '../../redux/action/UserAction'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { APPROVED_STATUS, PENDING_STATUS } from '../../redux/type/userTypes'
import { userService } from '../../service/UserServicer'

function UserForm() {

    const dispatch = useDispatch()

    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))

    const { arrCountry, isDisable } = useSelector(state => state.UseReducer)

    console.log('isDisable', isDisable)
    const [checkKYC, setCheckKYC] = useState('Please fillout your information!')

    const [state, setState] = useState({
        formUser: {
            userid: userLogin.id,
            firstname: '',
            lastname: '',
            gender: 1,
            passport: '',
            country: '',
            phone: '',
            photoFront: '',
            photoBack: '',
            photoSelfie: '',
            password: '',
            email: userLogin.email
        }
    })
    useEffect(() => {
        dispatch(getCountry)
    }, [])

    useEffect(() => {
        const checkKycUser = (data) => {
            return async (dispatch) => {
                try {
                    const result = await userService.checkKycUser(data)
                    console.log('result check', result)

                    if (result.data.data == 'PENDING') {
                        dispatch({ type: PENDING_STATUS })
                        // successMessage('Waiting for admin approval!')
                        setCheckKYC('Waiting for admin approval!')
                    }
                    if (result.data.data == 'APPROVED') {
                        dispatch({ type: APPROVED_STATUS })
                        // successMessage('Admin has approved your information!')
                        setCheckKYC('Admin has approved your information!')
                    }
                    if (result.data.data == 'CANCEL') {
                        dispatch({ type: APPROVED_STATUS })
                        // successMessage('Admin does not approve your information!')
                        setCheckKYC('Admin does not approve your information!')

                    }

                } catch (error) {
                    console.log('error kyc', error)
                }
            }
        }

        dispatch(checkKycUser())

    }, [checkKYC])

    const { Option } = Select

    const handleChangeFormUser = (e) => {
        state.formUser[e.target.name] = e.target.value
        setState({ ...state })
    }

    const handleChangeFile = (e) => {
        let file = e.target.files[0]
        state.formUser[e.target.name] = file
    }

    const handleSubmitUserForm = (e) => {
        e.preventDefault()

        const formData = new FormData();

        // for (let i in state.formUser) {
        //     if (i == 'photoFront' || i == 'photoBack' || i == 'photoSelfie') {
        //         continue
        //     }
        //     formData.append(i, state.formUser.i)
        // }

        formData.append('userid', state.formUser.userid)
        formData.append('firstname', state.formUser.firstname)
        formData.append('lastname', state.formUser.lastname)
        formData.append('gender', state.formUser.gender)
        formData.append('passport', state.formUser.passport)
        formData.append('country', state.formUser.country)
        formData.append('phone', state.formUser.phone)
        formData.append('photo', state.formUser.photoFront)
        formData.append('photo', state.formUser.photoBack)
        formData.append('photo', state.formUser.photoSelfie)

        console.log('state', state.formUser)

        dispatch(kycUser(formData))
        setCheckKYC('Waiting for admin approval!')
    }

    // const handleVerifyUserForm = () => {
    //     console.log('checkKycUser', { email: state.formUser.email, password: state.formUser.password })
    //     if (state.formUser.password == '') {
    //         errorMessage('Please enter password to verify')
    //     } else {
    //         dispatch(checkKycUser({ email: state.formUser.email, password: state.formUser.password }))
    //     }
    // }

    return (
        <div className='formUser'>
            <div className='formUser_container'>
                <p>{checkKYC}</p>
                <h2>User information</h2>
                <div className="form-group">
                    <label >User ID</label>
                    <input value={userLogin.id} disabled name="userid" className="form-control" placeholder="Enter user id" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Firstname</label>
                    <input disabled={isDisable} value={state.formUser.firstname} onChange={handleChangeFormUser} name="firstname" className="form-control" placeholder="Enter your firstname" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Lastname</label>
                    <input disabled={isDisable} value={state.formUser.lastname} onChange={handleChangeFormUser} name="lastname" className="form-control" placeholder="Enter your lastname" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Gender</label><br />
                    <Select disabled={isDisable} defaultValue="Select gender" name="gender" style={{ width: '100%' }} onChange={(value) => {
                        state.formUser.gender = value
                        setState({ ...state })
                    }} >
                        <Option value="0">Male</Option>
                        <Option value="1">Female</Option>
                    </Select>
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Passport</label>
                    <input disabled={isDisable} value={state.formUser.passport} onChange={handleChangeFormUser} name="passport" className="form-control" placeholder="Enter your passport" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Country</label>
                    <Select disabled={isDisable} defaultValue="Select country" name="country" style={{ width: '100%' }} onChange={(value) => {
                        state.formUser.country = value
                        setState({ ...state })
                    }} >
                        {arrCountry && arrCountry.map(country => {
                            return <Option key={country.id} value={country.nicename}>{country.nicename}</Option>
                        })}

                    </Select>
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Phone</label>
                    <input disabled={isDisable} value={state.formUser.phone} onChange={handleChangeFormUser} name="phone" className="form-control" placeholder="Enter your phone" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Photo front</label>
                    <input disabled={isDisable} type='file' onChange={handleChangeFile} name="photoFront" className="form-control" placeholder="Enter your photo" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label>Photo back</label>
                    <input disabled={isDisable} type='file' onChange={handleChangeFile} name="photoBack" className="form-control" placeholder="Enter your photo" />
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label >Selfie photo</label>
                    <input disabled={isDisable} type='file' onChange={handleChangeFile} name="photoSelfie" className="form-control" placeholder="Enter your photo" />
                    <small className="form-text text-muted"></small>
                </div>
                {/* <div className="form-group">
                    <label >Password</label>
                    <Input.Password
                        disabled={isDisable}
                        value={state.formUser.password}
                        onChange={handleChangeFormUser}
                        name='password'
                        placeholder="Input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <small className="form-text text-muted"></small>
                </div> */}
                <button className='btn_submitFormUser' onClick={handleSubmitUserForm}>Submit</button>
                {/* <button className='btn_verify' onClick={handleVerifyUserForm}>Verify</button> */}
            </div>
        </div>
    )
}
export default memo(UserForm)
