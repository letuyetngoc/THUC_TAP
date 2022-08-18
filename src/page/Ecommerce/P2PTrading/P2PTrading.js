import React, { useEffect, useState } from 'react'

import { FaBitcoin } from 'react-icons/fa';
import { BsFillFlagFill, BsFlag } from 'react-icons/bs';
import { AiFillThunderbolt } from 'react-icons/ai';

import { Modal } from 'antd'

import { history } from '../../../App';

export default function P2PTrading() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //
    return (
        <div className='P2Ptrading'>
            <div className='P2Ptrading__container'>
                <div className='P2Ptrading__top'>
                    <div className='P2Ptrading__top-container'>
                        <div className='P2Ptrading__chooseCoin'>
                            <div className='chooseCoin_left'>
                                <FaBitcoin className='icon' />
                                <span>Bitcoin Cash</span>
                            </div>
                            <div className='chooseCoin_right'>
                                <div onClick={showModal}>Choose another coin</div>
                                <Modal closable={false} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>
                            </div>
                        </div>
                        <div className='P2Ptrading__action'>
                            <div className='action_buy'>
                                <div>
                                    <BsFillFlagFill className='icon' />
                                    <span>Selling price:</span>
                                </div>
                                <div>
                                    --
                                </div>
                                <div className='btn_buy'>
                                    <div>Buy now</div>
                                </div>
                            </div>
                            <div className='action_sell'>
                                <div>
                                    <BsFillFlagFill className='icon' />
                                    <span>Buying price:</span>
                                </div>
                                <div>
                                    --
                                </div>
                                <div className='btn_sell'>
                                    <div>Sell now</div>
                                </div>
                            </div>
                        </div>
                        <div className='P2Ptrading__detail'>
                            <AiFillThunderbolt className='icon' />
                            <span>Receive Bitcoin Cash within 15 minutes or be refunded. <span>More details</span></span>
                        </div>
                    </div>
                </div>
                <div className='P2Ptrading__bottom'>
                    <div className='buy_coin'>
                        <div className='buy_coin_title'>
                            <BsFlag className='icon' />
                            <span>You want to buy Bitcoin Cash?</span>
                        </div>
                        <div className='buy_icon_list'>
                            <div className='buy_icon_item'>
                                <div className='buy_icon_item1'>
                                    <p>0.00 USD/<span>BCH</span></p>
                                    <p>Maximum: Unlimited</p>
                                </div>
                                <div className='buy_icon_item2'>
                                    <p>Visa, Mastercard</p>
                                </div>
                                <div className='buy_icon_item3'>
                                    <FaBitcoin className='icon' />
                                    Simplex
                                </div>
                                <div className='buy_icon_item4' onClick={() => history.push('/ecommerce/buycoin')}>
                                    <div className='btn_buy'>Buy</div>
                                </div>
                            </div>
                        </div>
                        <div className='buy_icon_button'>
                            <div onClick={() => history.push('/ecommerce/createby')}>Create Your Buying Ad</div>
                        </div>
                    </div>
                    <div className='sell_coin'>
                        <div className='sell_coin_title'>
                            <BsFlag className='icon' />
                            <span>You want to sell Bitcoin Cash?</span>
                        </div>
                        <div className='sell_icon_list'>
                            No advertisements found
                        </div>
                        <div className='sell_icon_button'>
                            <div>Create Your Selling Ad</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
