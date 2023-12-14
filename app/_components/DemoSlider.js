"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DemoSlider = ({ data }) => {
  console.log(data);
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            // autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(
              ({ id, title, image, time, link, distance, pro, con }) => (
                <SwiperSlide key={id}>
                  <div className="flex justify-between items-center text-white bg-orange-600 text-xl px-8 py-4">
                    <p>{title}</p>
                    <p className="cursor-pointer bg-zinc-50 rounded-full">
                      <a
                        href={link}
                        target="_blank"
                        className="w-10 h-10 flex justify-center"
                      >
                        <Image
                          src="/mapIcon.svg"
                          width={30}
                          height={30}
                          alt=""
                        />
                      </a>
                    </p>
                  </div>
                  <div className="px-8 py-2">
                    <div>
                      <span>營業時間</span>
                      {`：${time}`}
                    </div>
                    <div>
                      <span>距離</span>
                      {`：${distance} 分`}
                    </div>
                    <div>
                      <span>優點</span>
                      {`：${pro}`}
                    </div>
                    <div className="pb-4">
                      <span>缺點</span>
                      {`：${con}`}
                    </div>
                    <div className="w-4/5">
                      <Image src={image} width={300} height={300} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
