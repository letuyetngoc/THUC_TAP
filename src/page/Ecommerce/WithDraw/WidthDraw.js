import React from 'react'
import { useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { AiOutlineQrcode } from 'react-icons/ai'

export default function WidthDraw() {
    const [navItem, setNavItem] = useState({
        coinWallet: {
            isAppear: true,
            classActive: 'active'
        },
        userName: {
            isAppear: false,
            classActive: ''
        },
    })
    const [isInputAddress, setIsInputAddress] = useState(false)
    return (
        <div className='widthDraw'>
            <div className='widthDraw__container'>
                <div className='withDraw_nav'>
                    <ul>
                        <li onClick={() => setNavItem({
                            coinWallet: {
                                isAppear: true,
                                classActive: 'active'
                            },
                            userName: {
                                isAppear: false,
                                classActive: ''
                            },
                        })} className={navItem.coinWallet.classActive}>Coin Wallet</li>
                        <li onClick={() => setNavItem({
                            coinWallet: {
                                isAppear: false,
                                classActive: ''
                            },
                            userName: {
                                isAppear: true,
                                classActive: 'active'
                            },
                        })} className={navItem.userName.classActive}>Username</li>
                    </ul>
                </div>
                <hr />
                <div className='withDraw_content'>

                    {navItem.coinWallet.isAppear && <div className='withDraw__wallet'>
                        <div className='withDraw__item'>
                            <label>USDT Address:</label>
                            <div>
                                <input placeholder='USDT Address' />
                                <div><AiOutlineQrcode /></div>
                            </div>
                        </div>
                        <div className='withDraw__item'>
                            <label>Network:</label>
                            <div className='network_list'>
                                <div className='network_item'>TRC20</div>
                                <div className='network_item'>BEP20</div>
                                <div className='network_item'>SOLANA</div>
                                <div className='network_item'>ERC20</div>
                            </div>
                            <p><BsInfoCircleFill className='icon' /><span>Please pick the correct network</span></p>
                        </div>
                        <div className='withDraw__item'>
                            <label>Tether USDT Amount:</label>
                            <div>
                                <input placeholder='00.00' />
                                <div>
                                    <span>USTD</span>
                                    <span>Max</span>
                                </div>
                                <p>USDT available amount: 0.00 USDT</p>
                            </div>
                        </div>
                        <div className='withDraw__item'>
                            <input type='checkbox' id='address' onChange={() => setIsInputAddress(!isInputAddress)} />
                            <label className='label_checkbox' htmlFor='address'>Save this address for future withdrawals</label>
                            {isInputAddress && <>
                                <label>Address name:</label>
                                <div>
                                    <input placeholder='Address name' />
                                </div>
                            </>}
                        </div>
                        <table>
                            <tr>
                                <td><BsInfoCircleFill /></td>
                                <td>The above fees are not fixed, can vary depending on the state of the blockchain networks</td>
                            </tr>
                            <tr>
                                <td><BsInfoCircleFill /></td>
                                <td>Estimated time to complete: less than a minute</td>
                            </tr>
                            <tr>
                                <td><BsInfoCircleFill /></td>
                                <td>Do not withdraw directly to a crowdfund or ICO. We will not credit your account with tokens from that sale.</td>
                            </tr>
                        </table>
                        <div className='btn_submit'>
                            Submit
                        </div>
                    </div>}
                    {navItem.userName.isAppear && <div className='withDraw__userName'>
                        <div className='withDraw_item'>
                            <label>Username:</label>
                            <div>
                                <input placeholder='Input username' />
                            </div>
                        </div>
                        <div className='withDraw_item'>
                            <label>Tether USDT Amount:</label>
                            <div>
                                <input placeholder='00.00' />
                                <div>USTD</div>
                            </div>
                            <p>USDT available amount: 0.00 USDT</p>
                        </div>
                        <div className='withDraw_item'>
                            <label>Message:</label>
                            <div>
                                <textarea cols="30" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='btn_submit'>Submit</div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
