import React from 'react'

export default function HomeInfo() {
    return (
        <div className='homeInfo'>
            <div className='homeInfo__container'>
                <div className='homeInfo__img'>
                    <div className='homeInfo__img-item'></div>
                    <div className='homeInfo__img-item'></div>
                    <div className='homeInfo__img-item'></div>
                    <div className='homeInfo__img-item'></div>
                </div>
                <div className='homeInfo__content'>
                    <h4>Who We Are</h4>
                    <h4>We give you complete control of your Promoters.</h4>
                    <p>Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum.</p>
                    <div className='homeInfo__content-user'>
                        <div className='user_img'></div>
                        <div className='user_info'>
                            <span>Admin Name</span>
                            Comany Namer
                        </div>
                    </div>
                    <button className='btn_read_more'>Read more</button>
                </div>
            </div>
        </div>
    )
}
