import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { QrcodeOutlined } from '@ant-design/icons';
import { FaUserPlus, FaUserMinus, FaUsers } from 'react-icons/fa';
import Modal from 'antd/lib/modal/Modal';
import { getParent } from '../../redux/action/UserAction';
import QRCode from 'react-qr-code';

export default function UserRenderFolder() {

    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))
    // console.log('userLogin', userLogin)
    const { arrParent } = useSelector(state => state.UseReducer)
    // console.log('arrparent', arrParent)

    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);

    //modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        dispatch(getParent({ userid: 1 }))
    }, [])

    // sử dụng đệ quy render cây thư mục

    const renderTree = (arrParent) => {
        return arrParent.map((item, index) => {
            if (item.array) {
                return <li key={index} >
                    <FaUserMinus className='tree_icon' />
                    {item.userName} <span>{item.email}</span>
                    <ul>{renderTree(item.array)}</ul>
                </li>
            } else {
                return <li key={index}>
                    <FaUserPlus className='tree_icon' />
                    {item.userName} <span>{item.email}</span>
                </li>
            }
        })
    }

    return (
        <div className='adminProject'>
            <div className='adminProject_box'>
                <div className='adminProject_box_content'>
                    <label>Link:</label>
                    <input placeholder='Enter link' defaultValue={`http://localhost:3000/register/${userLogin.referral}`} />
                    <br />
                </div>
                <div>
                    <div className='adminProject_box_QR_code' onClick={showModal}>
                        <QrcodeOutlined />
                    </div>
                    <Modal title="Register Now by QR code" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <QRCode value={`http://localhost:3000/register/${userLogin.referral}`} />
                        </div>
                    </Modal>
                </div>
            </div>
            <div className='adminProject_tree' >
                <div className="tree">
                    <ul>
                        <li><FaUsers style={{ color: '#007bff', fontSize: '20px' }} /> Users
                            {/* code sai */}
                            {/* <ul>
                                {arrParent && arrParent.map((parent1, index) => {
                                    return <li key={index}>
                                        {parent1.userName} <span>{parent1.email}</span>
                                        <ul>
                                            {parent1.array && parent1.array.map((parent2, index) => {
                                                return <li key={index}>
                                                    {parent2.userName} <span>{parent2.email}</span>
                                                    <ul>
                                                        {parent2.array && parent2.array.map((parent3, index) => {
                                                            return <li key={index}>
                                                                {parent3.userName} <span>{parent3.email}</span>
                                                                <ul>
                                                                    {parent3.array && parent3.array.map((parent4, index) => {
                                                                        return <li>
                                                                            {parent4.userName} <span>{parent3.email}</span>
                                                                        </li>
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        })}
                                                    </ul>
                                                </li>
                                            })}
                                        </ul>
                                    </li>
                                })}
                            </ul> */}
                            <ul>
                                {renderTree(arrParent)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
