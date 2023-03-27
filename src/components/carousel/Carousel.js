import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import CarouselItem from './CarouselItem';
import hermes from '../../hermes.png';
import prada from '../../prada.png';
import celine from '../../celine.png';
import lv from '../../LV.png';

//DUMMY_DATA Тук
const DUMMY_DATA = [
    {
      id: "prada",
      image:
        prada,
      name: "Prada",
    },
    {
      id: "celine",
      image:
        celine,
      name: "Celine",
    },
    {
      id: "gucci",
      image:
        "https://i.pinimg.com/474x/c0/0d/7c/c00d7c6e9fdc57fdf72cf268cdcbb511.jpg",
      name: "Gucci",
    },
    {
      id: "hermes",
      image:
       hermes,
      name: "Hermes",
    },
    {
      id: "louis vuitton",
      image:
        lv,
      name: "Louis Vuitton",
    },
    {
      id: "chanel",
      image:
        "https://sothebys-com.brightspotcdn.com/a6/dc/3e834869492aa1c0155b004091eb/vintage-chanel-tote.jfif",
      name: "Chanel",
    },
    {
      id: "dolce and gabbana",
      image:
        "https://a.1stdibscdn.com/dolce-gabbana-burgundy-signature-fabric-and-leather-d-ring-baguette-bag-for-sale-picture-10/v_13101/v_154547521650058037459/luxury_women_dolcegabbana_used_handbags_p510260_007_master.jpg?width=768",
      name: "Dolce & Gabbana",
    },
    {
      id: "fendy",
      image:
        "https://aretrotale.com/wp-content/uploads/2022/06/1-1-47.jpg",
      name: "Fendy",
    },
  ];


const Carousel = () => {
    return (
    <>

    <Swiper
      navigation={true}
      slidesPerView={3}
      spaceBetween={3}
      freeMode={true}
      pagination={{
        clickable: false,
      }}
      modules={[Navigation]}
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
