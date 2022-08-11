import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';

export default function myComponent() {
    return (
        <div className='admin'>
            <div className='admin__container'>
                <div className='admin__navigation'>
                    <ul>
                        <li>
                            <a>
                                <span className='icon'><AiOutlineUserAdd /></span>
                                <span className='title'>User</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'><AiOutlineUserAdd /></span>
                                <span className='title'>Project</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'><AiOutlineUserAdd /></span>
                                <span className='title'>Project</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'><AiOutlineUserAdd /></span>
                                <span className='title'>Project</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'><AiOutlineUserAdd /></span>
                                <span className='title'>Project</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
