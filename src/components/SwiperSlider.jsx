import { SwiperSlide, Swiper } from "swiper/react";
import { imagesUrl } from "../data";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        modules={[Pagination, Autoplay]}
      >
        {imagesUrl.map((image) => (
          <SwiperSlide key={image}>
            <div className="md:h-[calc(100vh-40px)]">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
