import React from 'react'
import { ImLocation2 } from 'react-icons/im';
import { MdBed, MdOutlineGarage, MdApartment } from 'react-icons/md';
import { BiBath } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';

export default function HomeFeature() {
    const data = [
        {
            id: 1,
            img: './assets/img/house1.jpg'
        },
        {
            id: 2,
            img: './assets/img/house2.jpg'
        },
        {
            id: 3,
            img: './assets/img/house3.jpg'
        },
        {
            id: 4,
            img: './assets/img/house4.jpg'
        },
        {
            id: 5,
            img: './assets/img/house5.jpg'
        },
        {
            id: 6,
            img: './assets/img/house6.jpg'
        },
        {
            id: 7,
            img: './assets/img/house7.jpg'
        },
        {
            id: 8,
            img: './assets/img/house8.jpg'
        },
    ]
    return (
        <div className='homeFeature'>
            <div className='homeFeature__container'>
                <h3>Featured Properties</h3>
                <div className='homeFeature__nav'>
                    <ul>
                        <li>All</li>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                    </ul>
                </div>
                <div className='homeFeature__list'>
                    <div className='homeFeature__list-content'>
                        {data.map((item, index) => <FeatureItem key={index} img={item.img} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
const FeatureItem = ({ img }) => {
    return <div className='card_item'>
        <img src={img} />
        <div className='card_item_detail'>
            <div className='card_item_body'>
                <h4>Tittle goes here</h4>
                <div className='location'>
                    <ImLocation2 />
                    <span>123 Location. Example City,</span>
                </div>
                <div className='facilities'>
                    <div className='facilities_item'>
                        <MdBed />
                        <span>3 Bedrooms</span>
                    </div>
                    <div className='facilities_item'>
                        <BiBath />
                        <span>2 Bathrooms</span>
                    </div>
                    <div className='facilities_item'>
                        <MdApartment />
                        <span>Sq Ft:3400</span>
                    </div>
                    <div className='facilities_item'>
                        <MdOutlineGarage />
                        <span> 1 Garage</span>
                    </div>
                </div>
            </div>

            <hr />
            <div className='card_footer'>
                <div className='footer__left'>
                    <FaUserAlt />
                    <span>Jhon Doe</span>
                </div>
                <div className='footer__right'>
                    <p>6 year ago</p>
                </div>
            </div>
        </div>
    </div>
}

