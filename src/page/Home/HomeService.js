import React from 'react'
import { FaUserAlt, FaHouseDamage, FaBinoculars } from 'react-icons/fa';

export default function HomeService() {
    const data = [
        {
            icon: <FaUserAlt />,
            title: 'For Sellers',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        },
        {
            icon: <FaHouseDamage />,
            title: 'For Renters',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        },
        {
            icon: <FaBinoculars />,
            title: 'For Developers',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
        }
    ]
    return (
        <div className='homeService'>
            <div className='homeService__container'>
                <h3>We Offered Services</h3>
                <div className='homeService__container-card'>
                    {data && data.map((item, index) => {
                        return <CardItem key={index} icon={item.icon} title={item.title} content={item.content} />
                    })}

                </div>
            </div>

        </div>
    )
}
const CardItem = ({ icon, title, content }) => {
    return <div className='card_item'>
        <div className='icon'>
            {icon}
        </div>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
}
