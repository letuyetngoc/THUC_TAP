import React from 'react'
import { useState } from 'react'

export default function Store() {
    const [navItem, setNavItem] = useState({
        duAn: true,
        classNameDuAn: 'active',
        doGiaDung: false,
        classNameDoGiaDung: '',
        lamDep: false,
        classNameLamDep: ''
    })
    return (
        <div className='store'>
            <div className='store__content'>
                <div className='store_nav'>
                    <ul>
                        <li className={navItem.classNameDuAn} onClick={() => setNavItem({
                            duAn: true,
                            classNameDuAn: 'active',
                            doGiaDung: false,
                            classNameDoGiaDung: '',
                            lamDep: false,
                            classNameLamDep: ''
                        })}>
                            <p>Dự án</p>
                        </li>
                        <li className={navItem.classNameDoGiaDung} onClick={() => setNavItem({
                            duAn: false,
                            classNameDuAn: '',
                            doGiaDung: true,
                            classNameDoGiaDung: 'active',
                            lamDep: false,
                            classNameLamDep: ''
                        })}>
                            <p>Đồ gia dụng</p>
                        </li>
                        <li className={navItem.classNameLamDep} onClick={() => setNavItem({
                            duAn: false,
                            classNameDuAn: '',
                            doGiaDung: false,
                            classNameDoGiaDung: '',
                            lamDep: true,
                            classNameLamDep: 'active'
                        })}>
                            <p>Làm đẹp</p>
                        </li>
                    </ul>
                    <hr />
                    {navItem.duAn && <div className='list_item'>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                    </div>}
                    {navItem.doGiaDung && <div className='list_item'>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                    </div>}
                    {navItem.lamDep && <div className='list_item'>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item_img'>
                                <img src='https://picsum.photos/200' />
                            </div>
                            <div className='item_content'>
                                <h5>Dự án KN PARADISE CAM RANH</h5>
                                <p>100,000,000,000 ₫</p>
                                <div className='btn_buy'>Buy</div>
                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </div>
    )
}
