import React from 'react'
import { AiFillHome, AiFillLock } from 'react-icons/ai';
import { MdOutlineApartment } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { FaUsers, FaMoneyBillAlt } from 'react-icons/fa';

export default function HomeUtility() {
    const data = [
        {
            IconItem: <MdOutlineApartment />,
            title: 'Apartments',
            content: 'Lorem ipsum dolor sit amet consectetur elit tempor.'
        },
        {
            IconItem: <AiFillHome />,
            title: 'House',
            content: 'Lorem ipsum dolor sit amet consectetur elit tempor.'
        },
        {
            IconItem: <AiFillLock />,
            title: 'Security',
            content: 'Lorem ipsum dolor sit amet consectetur elit tempor.'
        },
        {
            IconItem: <BiSupport />,
            title: 'Support 24/7',
            content: 'Lorem ipsum dolor sit amet consectetur elit tempor.'
        },
        {
            IconItem: <FaUsers />,
            title: 'Trusted Agents',
            content: 'Lorem ipsum dolor sit amet consectetur elit tempor.'
        },
        {
            IconItem: <FaMoneyBillAlt />,
            title: 'Commercial',
            content: 'Lorem ipsum dolor sit amet consectetur elit tempor.'
        },
    ]
    return (
        <div className='homeUtility'>
            <div className='homeUtility__container'>
                <div className='homeUtility__title'>
                    <h3>What Are you Looking For? </h3>
                    <p>Adipisicing elit sedc eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <div className='homeUtility__content'>
                    {data.map((item, index) => {
                        return <CardItem key={index} IconItem={item.IconItem} title={item.title} content={item.content} />
                    })}
                </div>
            </div>
        </div>
    )
}
const CardItem = ({ IconItem, title, content }) => {
    return <div className='homeUtility__content-item'>
        <div className='card_item'>
            <div className='icon'>
                {IconItem}
            </div>
            <div className='card_item_content'>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    </div>
}
