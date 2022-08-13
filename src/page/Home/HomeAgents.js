import React from 'react'
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

export default function HomeAgents() {
    const data = [
        {
            img: '../assets/img/agent1.jpg',
            name: 'Hellen Smith'
        },
        {
            img: '../assets/img/agent2.jpg',
            name: 'Jonh Henrry '
        },
        {
            img: '../assets/img/agent3.jpg',
            name: 'David Jame'
        },
        {
            img: '../assets/img/agen4.jpg',
            name: 'Hellen Marry'
        },
    ]
    return (
        <div className='homeAgents'>
            <div className='homeAgents__container'>
                <h3>Our Agents</h3>
                <div className='homeAgents__content'>
                    {data.map((item, index) => <AgentItem key={index} img={item.img} name={item.name} />)}
                </div>
            </div>
        </div>
    )
}
const AgentItem = ({ img, name }) => {
    return <div className='card_item'>
        <div className='card_item_img'>
            <img src={img} />
            <div className='overplay'></div>
            <div className='caption'>
                <ul>
                    <li><FaFacebookF /></li>
                    <li><BsTwitter /></li>
                    <li><FaGooglePlusG /></li>
                </ul>
            </div>
        </div>
        <h4>{name}</h4>
        <p>Agent</p>
    </div>
}
