import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import classes from "./Stages.module.css";

import resim1 from "../../public/stages1.png";
import resim2 from "../../public/stages2.png";
import resim3 from "../../public/stages3.png";
export default function App() {
  return (
    <>
       <div className={classes.stages}>STAGES</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image src={resim1} width={190} height={123} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={resim2} width={448} height={290} />
          <div className={classes.sli_title}>Transfer</div>
          <div className={classes.sli_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aliquam nesciunt eligendi repellendus nihil quos ut quo sit
            necessitatibus magnam?
          </div>
          <br />
          <br />
          <br />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={resim3} width={190} height={123} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={resim1} width={190} height={123} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={resim2} width={448} height={290} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={resim3} width={190} height={123} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
