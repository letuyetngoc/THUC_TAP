import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { NavLink, Route } from 'react-router-dom';

export default function Manage(props) {
    const { Component, ...restProps } = props
    const handleClickToggleBtn = () => {
        document.querySelector('.manage__navigation').classList.toggle('active')
        document.querySelector('.manage__main').classList.toggle('active')
    }
    return (
        <Route {...restProps} render={(propsRout) => {
            return <div className='manage'>
                <div className='manage__container'>
                    <div className='manage__navigation'>
                        <ul>
                            <li>
                                <NavLink to='/manage' className='nav__item'>
                                    <span className='icon'><BsApple /></span>
                                    <span className='title'>Brand</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav__item' to='/manage/userkyc' activeClassName='nav__item_active'>
                                    <span className='icon'><FaUserAlt /></span>
                                    <span className='title'>UsersKYC</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/manage/user' className='nav__item' activeClassName='nav__item_active'>
                                    <span className='icon'><FaUserAlt /></span>
                                    <span className='title'>Users</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='nav__item'>
                                    <span className='icon'><FaUserAlt /></span>
                                    <span className='title'>Project</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='nav__item'>
                                    <span className='icon'><FaUserAlt /></span>
                                    <span className='title'>Project</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='nav__item'>
                                    <span className='icon'><FaUserAlt /></span>
                                    <span className='title'>Project</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='manage__main'>
                        <div className='manage__main_topbar'>
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
                        <div className='manage__main_content'>
                            {Component && <Component />}
                        </div>
                    </div>
                </div>
            </div>
        }} />
    )
}
