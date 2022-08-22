import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FaBitcoin } from 'react-icons/fa';
import { BsFillFlagFill, BsFlag } from 'react-icons/bs';
import { AiFillThunderbolt } from 'react-icons/ai';
import socket from '../../../socket/Socket';
import { cryptoService } from '../../../service/CryptoService';
import { Modal } from 'antd'

import { history } from '../../../App';

export default function P2PTrading() {
    const dispatch = useDispatch()
    const [listCoinInit, setListCoinInit] = useState()
    const [listCoin, setListCoin] = useState()
    const [nameCoin, setNameCoin] = useState('Bitcoin')

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    useEffect(() => {
        const getListCoinAll = async () => {
            try {
                const result = await cryptoService.getListCoinAll()
                // console.log('result', result.data.data)
                setListCoinInit(result.data.data)
            } catch (error) {
                console.log('error', error)
            }
        }
        dispatch(getListCoinAll)
    }, [])

    useEffect(() => {
        socket.on("listCoin", (res) => {
            // console.log(res, "listCoin");
            setListCoin(res)

        })
        return () => {
            socket.off("listCoin")
        }
    }, [])

    const renderListCoin = () => {
        const renderTable = (coin) => {
            return <tr key={coin.id} onClick={() => {
                setNameCoin(coin.token_key)
                setIsModalVisible(false)
            }}
                style={{ cursor: 'pointer' }}
            >
                <td
                >
                    <span>{coin.token_key} </span><br />
                    <span className='coinName'>{coin.name}</span>
                </td>
                <td>{coin.percent}%</td>
                <td>{coin.price}</td>
                <td>{coin.volume}</td>
            </tr>
        }

        return listCoin && listCoin.map((coin) => renderTable(coin)) ||
            listCoinInit && listCoinInit.map((coin) => renderTable(coin))
    }


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
                                {/* <FaBitcoin className='icon' /> */}
                                <span>{nameCoin}</span>
                            </div>
                            <div className='chooseCoin_right'>
                                <div onClick={showModal}>Choose another coin</div>
                                <Modal closable={false}
                                    footer={null}
                                    visible={isModalVisible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    width={1000}
                                >
                                    <div className='coinTable'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <td>COIN NAME</td>
                                                    <td>24H CHANGE</td>
                                                    <td>PRICE</td>
                                                    <td>24H VOLUME</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {renderListCoin()}
                                            </tbody>
                                        </table>
                                    </div>
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
                                <div className='buy_icon_item4' onClick={() => history.push('/buycoin')}>
                                    <div className='btn_buy'>Buy</div>
                                </div>
                            </div>
                        </div>
                        <div className='buy_icon_button'>
                            <div onClick={() => history.push('/createby')}>Create Your Buying Ad</div>
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
