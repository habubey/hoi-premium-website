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
import Clinicjs from "./Clinic.js";


 
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
          <Clinicjs />
        </SwiperSlide>
        <SwiperSlide>
          <Clinicjs />
        </SwiperSlide>
        <SwiperSlide>
          <Clinicjs />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
