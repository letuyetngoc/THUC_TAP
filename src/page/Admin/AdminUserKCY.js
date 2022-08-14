import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserKyc, updateKyc } from '../../redux/action/AdminAction'

export default function AdminUserKYC() {

    const dispatch = useDispatch()

    const { arrUserKYC } = useSelector(state => state.AdminReducer)
    console.log('arrUserKYC', arrUserKYC)



    useEffect(() => {
        dispatch(getAllUserKyc({
            limit: "100",
            page: "1"
        }))
    }, [])

    return (
        <div className='manageUserKC'>
            <div className='manage__container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">User name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Change status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrUserKYC && arrUserKYC.map((userKYC) => {
                            return <tr key={userKYC.id}>
                                <td scope="row">{userKYC.id}</td>
                                <td>{`${userKYC.firstname} ${userKYC.lastname}`}</td>
                                <td>{userKYC.email}</td>
                                <td>{userKYC.phone}</td>
                                <td>
                                    <span className={userKYC.kyc_status == 'APPROVED' ? 'badge bg-success' :
                                        userKYC.kyc_status == 'CANCEL' ? 'badge bg-danger' : 'badge bg-warning text-dark'}>
                                        {userKYC.kyc_status}
                                    </span>
                                </td>
                                <td>
                                    <select onChange={(e) => {
                                        const data = {
                                            idKyc: userKYC.id,
                                            type: e.target.value
                                        }
                                        dispatch(updateKyc(data))
                                        dispatch(getAllUserKyc({
                                            limit: "100",
                                            page: "1"
                                        }))
                                        // console.log('data', data)
                                    }}
                                        id={userKYC.id} className="select_status">
                                        <option >Select status</option>
                                        <option value='APPROVED'>APPROVED</option>
                                        <option value='CANCEL'>CANCEL</option>
                                    </select>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div >
    )
}

