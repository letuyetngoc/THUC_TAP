import React from 'react'
//icon
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { MenuOutlined } from '@ant-design/icons'

export default function HomeFooter() {
    return (
        <div className='homeFooter'>
            <div className='homeFooter__container'>
                <h3>Don't forget to Sign up</h3>
                <div className='homeFooter_search'>
                    <input />
                    <div className='btn_subcribe'>Subcribe</div>
                </div>
                <div className='homeFooter__list'>
                    <div className='homeFooter_item'>
                        <h4>About Us</h4>
                        <p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus. Nulla porttitor accumsana tincidunt.</p>
                        <ul>
                            <li> <a><FaFacebookF /></a></li>
                            <li> <a><BsTwitter /></a></li>
                            <li> <a><FaGooglePlusG /></a></li>
                            <li> <a><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                    <div className='homeFooter_item'>
                        <h4>Get in touch</h4>
                        <div className='item_location'>
                            <h5>Location</h5>
                            <p>8088 k 4th block building, Honey Avenue, New York City</p>
                        </div>
                        <div className='item_contact'>
                            <h5>Contact </h5>
                            <p>Phone : +121 098 8907 9987</p>
                            <p>Email : info@esxample.com</p>
                        </div>
                    </div>
                    <div className='homeFooter_item'>
                        <h4>Quick Links</h4>
                        <div className='link'>
                            <ul >
                                <li>Home</li>
                                <li>About</li>
                                <li>Plans</li>
                                <li>Service</li>
                                <li>Contact us</li>
                            </ul>
                            <ul >
                                <li>Feature</li>
                                <li>Support</li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='footer_text'>© 2018 Promoter. All Rights Reserved | Design by W3layoutss</p>
            </div>
        </div>
    )
}
