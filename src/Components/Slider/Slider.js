import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import styles from './styles.module.css'

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  const pagination = {
    clickable: true,
    bulletClass: `swiper-pagination-bullet`,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className={styles.bulletClass}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
