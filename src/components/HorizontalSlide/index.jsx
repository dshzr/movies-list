import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import CardMovie from "../CardMovie";
import api from "../../api";
import { useEffect, useState } from "react";

export default function HorizontalSlide({ nowPlaying, setNowPlaying, page }) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    let x = window.screen.width;

    if (x < 500) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="m-6 cursor-grab">
      <h1
        className="
        text-3xl 
        font-thin
        text-white/90
        pb-6
    "
      >
        Trending
      </h1>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={isMobile ? 12 : 50}
        slidesPerView={2}
      >
        {nowPlaying &&
          nowPlaying.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CardMovie movie={item} w="" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
