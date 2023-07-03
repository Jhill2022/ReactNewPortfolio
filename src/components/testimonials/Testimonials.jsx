import React from 'react';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import { TestimonialStyle } from './TestimoinialStyled';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      avatar: avatar1,
      name: 'Tina Snow',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a id porro qui non consequatur, tenetur dolorem perspiciatis magni saepe, expedita ducimus harum quia! Omnis nemo laborum libero assumenda rerum!',
    },
    {
      avatar: avatar2,
      name: 'Shatta Wale',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a id porro qui non consequatur, tenetur dolorem perspiciatis magni saepe, expedita ducimus harum quia! Omnis nemo laborum libero assumenda rerum!',
    },
    {
      avatar: avatar3,
      name: 'Kwame Despite',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a id porro qui non consequatur, tenetur dolorem perspiciatis magni saepe, expedita ducimus harum quia! Omnis nemo laborum libero assumenda rerum!',
    },
    {
      avatar: avatar4,
      name: 'Nana Ama Mcbrown',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a id porro qui non consequatur, tenetur dolorem perspiciatis magni saepe, expedita ducimus harum quia! Omnis nemo laborum libero assumenda rerum!',
    },
  ];
  return (
    <TestimonialStyle id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial__content">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>

              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TestimonialStyle>
  );
};

export default Testimonials;
