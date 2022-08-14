import React from 'react'
import Slider from "react-slick";

export default function HomeTestimonial() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const data = [
        {
            img: './assets/img/testimonial1.jpg',
            name: 'Mary Jane'
        },
        {
            img: './assets/img/testimonial2.jpg',
            name: 'Steven Wilson'
        },
        {
            img: './assets/img/testimonial1.jpg',
            name: 'Steven Wilson'
        },
        {
            img: './assets/img/testimonial2.jpg',
            name: 'Peter guptill'
        },
    ]
    return (
        <div className='homeTestimonial'>
            <div className='homeTestimonial__container'>
                <h3>Testimonial</h3>
                <div className='homeTestimonial__content'>
                    <Slider {...settings}>
                        {data && data.map((item, index) => {
                            return <SlickItem key={index} img={item.img} name={item.name} />

                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

const SlickItem = ({ img, name }) => {
    return <div className='slick_container'>
        <div className='slick_item'>
            <div className='slick_item_top'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod.</p>
            </div>
            <div className='slick_item_grid'>
                <div className='grid_img'>
                    <img src={img} />
                </div>
                <div className='grid_img_info'>
                    <h5>{name}</h5>
                    <p>
                        United States
                        <span>(Company)</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}
