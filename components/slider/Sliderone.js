import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import classes from "../denemesayfa/deneme.module.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import { margin } from "@mui/system";
import Sliderjs from "./Slider.js";


 
export default function App() {
  return (
    <div div className={classes.back}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={classes.myswiper}
    
      >
        <SwiperSlide className={classes.swiperslide}>
          <Sliderjs />
        </SwiperSlide>
        <SwiperSlide>
          <Sliderjs />
        </SwiperSlide>
        <SwiperSlide>
          <Sliderjs />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

{
  /* 

       {sliders?.data?.map((item) => (
         <div key={item.id}>
       <Image src={`http://localhost:1337${item.attributes.imgUrl.data.attributes.url}`}></Image>
     </div>


))} */
}

{
  /* <Image layout="fill" src={'http://localhost:1337/api/sliders?populate=imgUrl/data/1/attributes/imgUrl/data/attributes/url'} /> */
}
