import React from 'react'
import classes from './Carousel.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import CarouselItem from './CarouselItem';
//DUMMY_DATA Тук
const DUMMY_DATA = [
    {
      id: "prada",
      image:
        "https://aretrotale.com/wp-content/uploads/2022/01/2-97.jpg",
      name: "Prada",
    },
    {
      id: "celine",
      image:
        "https://cdn.shopify.com/s/files/1/0248/6799/products/Celine_Black_Leather_Gold_Ring_Bag_1_of_8_1024x1024.jpg?v=1463443594",
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
        "https://cdn.shopify.com/s/files/1/0225/2478/8810/products/148296-50BRKNVYGE-Hermes-50cm-birkin-voyage-bag-tan-1.jpg?v=1668622219",
      name: "Hermes",
    },
    {
      id: "louis vuitton",
      image:
        "https://cdn.shopify.com/s/files/1/0559/1718/3023/products/kjihugv.jpg?v=1653066606",
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
      id: "balmain",
      image:
        "https://aretrotale.com/wp-content/uploads/2022/06/1-1-47.jpg",
      name: "Balmain",
    },
  ];
const Carousel = () => {


    return (
    <>

    <Swiper
      slidesPerView={5}
      spaceBetween={5}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        {/* ТУК МАПВАШ DUMMY_DATA И НА КОМПОНЕНТА ЗАДАВАШ ДАННИТЕ */}
        {DUMMY_DATA.map((bag) => (
          <CarouselItem image={bag.image} name={bag.name} id={bag.id} />
        ))}
      </SwiperSlide>
     
    </Swiper>
  </>
  )
}






export default Carousel
