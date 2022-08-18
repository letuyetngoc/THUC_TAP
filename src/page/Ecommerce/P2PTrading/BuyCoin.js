import React, { useEffect } from 'react'
import { Input } from 'antd'
import { Collapse } from 'antd';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const { Panel } = Collapse;
export default function BuyCoin() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='byCoin'>
            <div className='byCoin__container'>
                <div className='byCoin__amount'>
                    <div className='amount_item'>
                        <label>Amount of ETH*:</label>
                        <Input />
                    </div>
                    <div className='btn_by'>Buy ETH </div>
                </div>
                <hr />
                <div className='byCoin__adDetail'>
                    <table className='adDetail_table'>
                        <thead>
                            <td colSpan='2' >Advertisement details</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PRICE</td>
                                <td>45,974,984 VNDR/ETH</td>
                            </tr>
                            <tr>
                                <td>BUYING FROM</td>
                                <td>XABONG</td>
                            </tr>
                            <tr>
                                <td>Amount limits</td>
                                <td>0.00012376 ETH - 0.06365362 ETH</td>
                            </tr>
                            <tr>
                                <td>Payment method</td>
                                <td>Remitano VND Wallet</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>VietNam</td>
                            </tr>
                            <tr>
                                <td>Payment window</td>
                                <td>15 minutes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className='byCoin__info'>
                    <Collapse defaultActiveKey={['1']} >
                        <Panel header="What is Remitano VND Wallet?" key="1">
                            <p>Remitano VND wallet (fiat-wallet) is used to store the VND belong to each user (similar to any other coin wallet). Users can deposit, withdraw and trade using fiat-wallet. Therefore, trading using fiat-wallet is automatic, instant and 100% safe.</p>
                        </Panel>
                        <Panel header="Is it safe to buy Ethereum?" key="2">
                            <p>Remitano VND wallet (fiat-wallet) is used to store the VND belong to each user (similar to any other coin wallet). Users can deposit, withdraw and trade using fiat-wallet. Therefore, trading using fiat-wallet is automatic, instant and 100% safe.</p>
                        </Panel>
                        <Panel header="When will I receive Ethereum?" key="3">
                            <p>Remitano VND wallet (fiat-wallet) is used to store the VND belong to each user (similar to any other coin wallet). Users can deposit, withdraw and trade using fiat-wallet. Therefore, trading using fiat-wallet is automatic, instant and 100% safe.</p>
                        </Panel>
                        {/* <div className='info_item'>
                            <div>When will I receive Ethereum?</div>
                            <MdOutlineArrowBackIosNew className='icon' />
                        </div> */}
                    </Collapse>
                </div>
            </div>
        </div>
    )
}
