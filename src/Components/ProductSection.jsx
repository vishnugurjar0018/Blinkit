import React from 'react'
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

// import './styles.css';

function ProductSection({ title, products }) {

  console.log(products);
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },


          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}

        className="mySwiper"
      >

        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <Card product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductSection;