import React from 'react'
import { FaUserEdit, FaUsers, FaInfoCircle } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { NavLink, Route } from 'react-router-dom';

export default function UserTemplate(props) {
    const { Component, ...restProps } = props
    const handleClickToggleBtn = () => {
        document.querySelector('.user__navigation').classList.toggle('active')
        document.querySelector('.user__main').classList.toggle('active')
    }
    return (
        <Route {...restProps} render={(propsRout) => {
            return <div className='user'>
                <div className='user__container'>
                    <div className='user__navigation'>
                        <ul>
                            <li>
                                <NavLink to='/user' className='nav__item'>
                                    <span className='icon'><BsApple /></span>
                                    <span className='title'>Brand</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav__item' to='/user/users' activeClassName='nav__item_active'>
                                    <span className='icon'><FaUsers /></span>
                                    <span className='title'>All users</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/user/form' className='nav__item' activeClassName='nav__item_active'>
                                    <span className='icon'><RiLockPasswordFill /></span>
                                    <span className='title'>Change password</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/user/userInfo' className='nav__item' activeClassName='nav__item_active'>
                                    <span className='icon'><FaInfoCircle /></span>
                                    <span className='title'>Infomation</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='user__main'>
                        <div className='user__main_topbar'>
                            <div className='toggle_btn' onClick={handleClickToggleBtn}>
                                <AiOutlineMenu className='icon' />
                            </div>
                            <div className='search'>
                                <label>
                                    <AiOutlineSearch className='icon' />
                                    <input placeholder='Search here' />
                                </label>
                            </div>
                            <div className='avatar'>N</div>
                        </div>
                        <div className='user__main_content'>
                            {Component && <Component {...propsRout} />}
                        </div>
                    </div>
                </div>
            </div>
        }} />
    )
}
