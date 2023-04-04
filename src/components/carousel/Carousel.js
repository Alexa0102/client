import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import CarouselItem from './CarouselItem';

import DUMMY_DATA from "../../util/dummyData";



const Carousel = () => {
    return (
    <>

    <Swiper
      navigation={true}
      slidesPerView={3}
      spaceBetween={3}
      freeMode={true}
      pagination={{
        clickable: true ,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      
        {DUMMY_DATA.map((bag) => (
            <SwiperSlide>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "5rem"}}>
                    <CarouselItem image={bag.image} name={bag.name} id={bag.id} />
                </div>
            </SwiperSlide>
        ))}

    </Swiper>
  </>
  )
}

export default Carousel
