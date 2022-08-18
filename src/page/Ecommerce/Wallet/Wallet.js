import React from 'react'
import { FaBitcoin } from 'react-icons/fa'
import { BsInfoCircleFill } from 'react-icons/bs'
import QRCode from 'react-qr-code'

export default function Wallet() {
    return (
        <div className='wallet'>
            <div className='wallet__container'>
                <div className='wallet__left'>
                    <div className='wallet_contain'>
                        <div className='wallet_title'>
                            <div>Wallets</div>
                            <div className='btn_contact'>Contact support</div>
                        </div>
                        <div className='wallet_item'>
                            <FaBitcoin className='icon' />
                            <div className='item_content'>
                                <h4>Remitano Network Coin</h4>
                                <p>0000000</p>
                                <div className='list_btn'>
                                    <div className='btn_deposit'>Deposit</div>
                                    <div className='btn_widthDraw'>Width draw</div>
                                    <div className='btn_Swap'>Swap</div>
                                </div>
                            </div>
                        </div>
                        <div className='wallet_item'>
                            <FaBitcoin className='icon' />
                            <div className='item_content'>
                                <h4>Remitano Network Coin</h4>
                                <p>0000000</p>
                                <div className='list_btn'>
                                    <div className='btn_deposit'>Deposit</div>
                                    <div className='btn_widthDraw'>Width draw</div>
                                    <div className='btn_Swap'>Swap</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wallet__right'>
                    <div className='wallet_deposit'>
                        <p>Deposit address:</p>
                        <div className='deposit_link'>
                            <input disabled value=' 0x8b0D87C266B52752283394b0135954f31DF7e55F' />
                            <div className='btn_copy'>Copy</div>
                        </div>
                        <div className='deposit_qrCode'>
                            <QRCode value="0x8b0D87C266B52752283394b0135954f31DF7e55F" />
                        </div>
                        <div className='btn_transaction'>
                            <div>Transaction history</div>
                        </div>
                        <div className='deposit_note'>
                            <p>Note:</p>
                            <div className='note_item'>
                                <BsInfoCircleFill className='icon' />
                                <span>You have to deposit at least 0.0001 BCH to be credited. Any deposit that is less than 0.0001 BCH will not be refunded</span>
                            </div>
                            <div className='note_item'>
                                <BsInfoCircleFill className='icon' />
                                <span>This deposit address only accepts BCH. Do not send other coins to it.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
