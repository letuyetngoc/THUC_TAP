import React from 'react'
import { useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import Flickity from 'react-flickity-component'

let slideIndex = 1;
const flickityOptions = {
    initialIndex: 2,
    autoPlay: true,
    wrapAround: true,
    pauseAutoPlayOnHover: true,
}
export default function Store() {

    const [navItem, setNavItem] = useState({
        item0: {
            item: true,
            class: 'active'
        },
        item1: {
            item: false,
            class: ''
        },
        item2: {
            item: false,
            class: ''
        }
    })
    // Next/previous controls
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const showSlides = (n) => {
        let i;
        let navItem = document.getElementsByClassName("navItem");
        if (n > navItem.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = navItem.length }
        for (i = 0; i < navItem.length; i++) {
            setNavItem({
                item0: {
                    item: false,
                    class: ''
                },
                item1: {
                    item: false,
                    class: ''
                },
                item2: {
                    item: false,
                    class: ''
                }
            })
        }
        setNavItem((prev) => {
            prev[`item${slideIndex - 1}`] = {
                item: true,
                class: 'active'
            }
            return { ...prev }
        })
    }
    //

    return (
        <div className='store'>
            <div className='store__content'>
                <div className='store__carousel'>
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false

                    >
                        <img src="./assets/img/carousel1.jpg" />
                        <img src="./assets/img/carousel2.jpg" />
                        <img src="./assets/img/carousel1.jpg" />
                    </Flickity>
                </div>
                <div className='store_nav'>
                    <ul>
                        <li className='btn_slick ' onClick={() => plusSlides(-1)}><MdArrowBackIos /></li>
                        <li className={`${navItem.item0.class} navItem`} onClick={() => setNavItem({
                            item0: {
                                item: true,
                                class: 'active'
                            },
                            item1: {
                                item: false,
                                class: ''
                            },
                            item2: {
                                item: false,
                                class: ''
                            }
                        })}>
                            <p>Dự án</p>
                        </li>
                        <li className={`${navItem.item1.class} navItem`} onClick={() => setNavItem({
                            item0: {
                                item: false,
                                class: ''
                            },
                            item1: {
                                item: true,
                                class: 'active'
                            },
                            item2: {
                                item: false,
                                class: ''
                            }
                        })}>
                            <p>Đồ gia dụng</p>
                        </li>
                        <li className={`${navItem.item2.class} navItem`} onClick={() => setNavItem({
                            item0: {
                                item: false,
                                class: ''
                            },
                            item1: {
                                item: false,
                                class: ''
                            },
                            item2: {
                                item: true,
                                class: 'active'
                            }
                        })}>
                            <p>Làm đẹp</p>
                        </li>
                        <li className='btn_slick right' onClick={() => plusSlides(1)}><MdArrowForwardIos /></li>
                    </ul>
                    <hr />
                    {navItem.item0.item && <div className='list_item'>
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
                    {navItem.item1.item && <div className='list_item'>
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
                    {navItem.item2.item && <div className='list_item'>
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
