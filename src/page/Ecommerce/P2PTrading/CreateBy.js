import React, { useEffect } from 'react'

import { Input } from 'antd';
import { Select } from 'antd';

import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import { BsFlag } from 'react-icons/bs'
import { history } from '../../../App';

const { Option } = Select;

export default function CreateBy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='createBy'>
            <div className='createBy__container'>
                <div className='createBy__ad'>
                    <div className='ad_content'>
                        <div className='ad_top'>
                            <div className='ad_left'>
                                <BsFlag className='icon' />
                                <h2>Ad to buy BTC</h2>
                            </div>
                            <div className='ad_right'>
                                <AiOutlineEdit className='icon' />
                            </div>
                        </div>
                        <p>Market buy price: <span>564,744,773 VND</span></p>
                    </div>
                    <hr />
                    <div className='price_action'>
                        <div>Fixed price</div>
                    </div>
                </div>
                <div className='createBy__price'>
                    <h2>Price</h2>
                    <div className='price_item'>
                        <label>Fixed price:</label>
                        <div>
                            <Input />
                            <div className='unit_coin'>VND</div>
                        </div>
                    </div>
                    <div className='price_item'>
                        <label>BTC price that sellers see:</label>
                        <div>
                            <Input />
                            <div className='unit_coin'>VND/BTC</div>
                        </div>
                    </div>
                    <div className='price_item'>
                        <label>BTC price that you pay:</label>
                        <div>
                            <Input />
                            <div className='unit_coin'>VND/BTC</div>
                        </div>
                    </div>
                </div>
                <div className='createBy__amount'>
                    <h2>Amount</h2>
                    <div className='amount_item'>
                        <label>Amount of BTC:</label>
                        <div>
                            <Input />
                            <div className='unit_coin'>BTC</div>
                        </div>
                    </div>
                    <div className='amount_item'>
                        <label>Maximum BTC amount in one trade:</label>
                        <div>
                            <Input />
                            <div className='unit_coin'>BTC</div>
                        </div>
                    </div>
                </div>
                <div className='createBy_payment'>
                    <h2>Payment details</h2>
                    <div className='payment_item'>
                        <label>Payment method:</label>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                        // onChange={handleChange}
                        >
                            <Option value="jack">Bank transfer</Option>
                            <Option value="lucy">Bank transfer</Option>
                        </Select>
                    </div>
                    <div className='payment_item'>
                        <label>Payment window:</label>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                        // onChange={handleChange}
                        >
                            <Option value="jack">15 minutes</Option>
                        </Select>
                    </div>
                </div>
                <div className='createBy__preview'>
                    <div className='preview_text'>
                        <AiOutlineEye className='icon' />
                        <span><span>Preview</span> your ad</span>
                    </div>
                    <div className='preview_btn'>
                        <div onClick={() => history.push('/ecommerce/sanP2P')} className='btn_cancel'>Cancel</div>
                        <div className='btn_create'>Create new advertisement</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
