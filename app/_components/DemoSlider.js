"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Item = ({ title, text }) => {
  return (
    <div className="flex" key={title}>
      <div className="TextAlignLast w-20 mr-1">{title}</div>
      <span className="mr-1">:</span>
      {text}
    </div>
  );
};

const DemoSlider = ({ data }) => {
  console.log(data);
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          {data.map(({ id, title, image, time, link, distance, pro, con }) => (
            <div key={id}>
              <div className="flex justify-between items-center text-white bg-orange-600 text-2xl px-6 py-4">
                <p>{title}</p>
                <p className="cursor-pointer bg-zinc-50 rounded-full">
                  <a
                    href={link}
                    target="_blank"
                    className="w-10 h-10 flex justify-center"
                  >
                    <Image src="/mapIcon.svg" width={30} height={30} alt="" />
                  </a>
                </p>
              </div>
              <div className="px-8 py-2">
                <Item title="營業時間" text={time} />
                <Item title="距離" text={`${distance} 分`} />
                <Item title="優點" text={pro} />
                <Item title="缺點" text={con} />
                <div className="w-4/5 my-2">
                  <Image src={image} width={300} height={300} alt="" />
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
