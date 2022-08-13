import React from 'react'
import { useState } from 'react';

//icon
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { MenuOutlined } from '@ant-design/icons'

export default function HomeHeader() {
    const [classActiveItem, setClassActiveItem] = useState('active')

    const handleToggleBtn = () => {
        document.querySelector('.homeHeader__nab-list').classList.toggle('active')
    }
    const handleActiveClassItem = () => {
        setClassActiveItem(classActiveItem == 'active' ? '' : 'active')
    }
    return (
        <div className='homeHeader'>
            <div className='homeHeader__container'>
                <div className='homeHeader__contact'>
                    <div className='homeHeader__contact-text'>
                        <p>Have any Questions?</p>
                    </div>
                    <div className='homeHeader__contact-group'>
                        <div className='homeHeader__contact-phone'>
                            <p>Call Us : <strong>1234567890</strong></p>
                        </div>
                        <div className='homeHeader__contact-icon'>
                            <ul>
                                <li> <a><FaFacebookF /></a></li>
                                <li> <a><BsTwitter /></a></li>
                                <li> <a><FaGooglePlusG /></a></li>
                                <li> <a><FaLinkedinIn /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='homeHeader__nab'>
                    <div className='homeHeader__nab-top'>
                        <h1>
                            Promoter
                        </h1>
                        <div className='btn_nav' onClick={handleToggleBtn}>
                            <MenuOutlined />
                        </div>
                    </div>
                    <div className='homeHeader__nab-list'>
                        <ul >
                            <li className='nav-item active'>
                                <a className='nav-link'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Service</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Pricing</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Contact</a>
                            </li>
                            <li className='nav-item'>
                                <button className='btn_login'>Log in</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='homeHeader__content'>
                    <h3>Your realtor for life!</h3>
                    <p>
                        Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis
                    </p>
                    <div className='btn_content'>
                        <button className='btn_about'>About</button>
                        <button className='btn_contact'>Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
