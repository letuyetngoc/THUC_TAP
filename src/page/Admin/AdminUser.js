import { Table } from 'antd';
import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { errorMessage, successMessage } from '../../component/message';
import { adminService } from '../../service/AdminService';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        with: '10%',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        with: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        // sorter: {
        //     compare: (a, b) => a.chinese - b.chinese,
        //     multiple: 3,
        // },
        with: '20%',
    },
    {
        title: 'Parent name',
        dataIndex: 'userNameParent',
        // sorter: {
        //     compare: (a, b) => a.chinese - b.chinese,
        //     multiple: 3,
        // },
        with: '10%',
    },
    {
        title: 'Active status',
        dataIndex: 'active',
        // sorter: {
        //     compare: (a, b) => a.math - b.math,
        //     multiple: 2,
        // },
        with: '10%',
    },

    {
        title: 'Block status',
        dataIndex: 'block',
        // sorter: {
        //     compare: (a, b) => a.english - b.english,
        //     multiple: 1,
        // },
        with: '10%',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        // sorter: {
        //     compare: (a, b) => a.english - b.english,
        //     multiple: 1,
        // },
        with: '10%',
    },
];


const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
};

const AdminUser = () => {
    const dispatch = useDispatch()
    const [arrUser, setArrUser] = useState()
    console.log('arrUser', arrUser)

    //action

    const getAllUser = (data) => {
        return async () => {
            try {
                const result = await adminService.getAllUser(data)
                setArrUser(result.data.data.array)

            } catch (error) {
                console.log('error', error)
            }
        }
    }

    const blockAndUnBlockUser = (idUser) => {
        return async (dispatch) => {
            try {
                const result = await adminService.blockAndUnBlockUser(idUser)
                console.log('result', result)
                successMessage('Susscess', result.data.message)

                dispatch(getAllUser({
                    limit: "1000",
                    page: "1"
                }))

            } catch (error) {
                console.log('error', error)
                errorMessage('Error', error.response.data.message)
            }
        }
    }

    const activeUser = (userId) => {
        return async (dispatch) => {
            try {
                const result = await adminService.activeUser(userId)
                console.log('result', result)
                successMessage('Susscess', result.data.message)
            } catch (error) {
                console.log('error', error)
                errorMessage('Error', error.response.data.message)
            }
        }
    }
    //

    const data = arrUser && arrUser.map(user => {
        return {
            key: user.id,
            id: user.id,
            name: user.userName,
            email: user.email,
            userNameParent: user.userNameParent || 'None',
            active: user.active == 1 ? 'Active' : 'Block',
            block: user.block == 1 ? 'Block' : 'Unblock',
            action: <div className='action'>
                <span className='badge bg-success' style={{ marginRight: '5px', cursor: 'pointer' }} onClick={() => {
                    dispatch(activeUser({ id: user.id }))
                }}>Active</span>
                <span className='badge bg-danger' style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => {
                    dispatch(blockAndUnBlockUser({ id: user.id }))

                }}>{user.block == 1 ? 'Unblock' : 'Block'}</span>
            </div>

        }
    })

    useEffect(() => {
        dispatch(getAllUser({
            limit: "1000",
            page: "1"
        }))
    }, [])
    return <div className='manageUser'>
        <div className='manageUser__table'>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    </div>
};
export default AdminUser;