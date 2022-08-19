import React from 'react'
import { AiFillApple } from 'react-icons/ai';
import { NavLink, Route } from 'react-router-dom';
import { history } from '../../App'

import { MenuOutlined } from '@ant-design/icons'
import { Popover } from 'antd';

export default function EcommerceHomeTemplate({ Component, ...restProps }) {
    return (
        <Route {...restProps} render={(propsRoute) => {

            const handleToggleBtn = () => {
                document.querySelector('.nav_main').classList.toggle('active')
                document.querySelector('.overplay').classList.toggle('active')
            }
            const handleToggleOverplay = () => {
                document.querySelector('.nav_main').classList.remove('active')
                document.querySelector('.overplay').classList.remove('active')
            }

            const content = (
                <div onClick={() => {
                    window.location.reload()
                    localStorage.removeItem('USER_LOGIN')
                    localStorage.removeItem('ACCESS_TOKEN')
                }} style={{ cursor: 'pointer' }}>
                    Log out
                </div>
            );
            return (
                <div className='ecommerceHomeTemplate' >
                    <div className='overplay' onClick={handleToggleOverplay}></div>
                    <div className='ecommerceHomeTemplate__header'>
                        <div className='ecommerceHomeTemplate__nav'>
                            <div className='nav_logo'>
                                <AiFillApple className='icon' />
                                Brand
                            </div>
                            <ul className='nav_main'>
                                <li>
                                    <NavLink activeClassName='nav_main_active' to='/home' className='nav_main_item'>
                                        <p>Home</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='nav_main_active' to='/store' className='nav_main_item'>
                                        <p>Store</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='nav_main_active' to='/trading' className='nav_main_item'>
                                        <p>P2P Trading</p>
                                    </NavLink>
                                </li>
                                <div className='btn_right'>
                                    {localStorage.getItem('USER_LOGIN') ?
                                        <Popover placement="bottomRight" content={content} trigger="click">
                                            <div className='nav_avatar'>N</div>
                                        </Popover> :
                                        <button className='btn_login' onClick={() => history.push('/login')}>Sign in</button>}
                                </div>
                            </ul>
                            <div className='btn_toggle_nav' onClick={handleToggleBtn}>
                                <MenuOutlined />
                            </div>
                        </div>
                    </div >
                    <div className='ecommerceHomeTemplate__content'>
                        {Component && <Component {...propsRoute} />}
                    </div>
                </div >
            )
        }} />
    )
}
