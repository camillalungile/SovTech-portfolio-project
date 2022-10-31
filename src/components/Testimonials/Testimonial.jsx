import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/1.jpeg";
import profilePic2 from "../../img/2.jpeg";
import profilePic3 from "../../img/3.jpeg";
import profilePic4 from "../../img/4.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I am a humble, respectful, dynamic, self-motivated, hardworking, versatile, vibrant resilient young and progressive individual currently doing my post grad Bachelor of science in computer science NQF level 8",
    },
    {
      img: profilePic2,
      review:
        " I have genuine passion in working and learning, I also wish to further my studies. One of my strongest points is my self-motivation, which allows me to perform well under pressure and against aggressive deadlines.",
    },
    {
      img: profilePic3,
      review:
        "As a highly performance driven individual, I am currently heading a research module in Artificial intelligence within Cyber Security sector, where I am evaluating the effectiveness of two machine algorithms on a smartgrid data set for the detection of anormalious behaviors.",
    },
    {
      img: profilePic4,
      review:
        "One of my strongest points is my self-motivation, which allows me to perform well under pressure and against aggressive deadlines. I am a highly analytical thinker and a hard worker, I can quickly identify, scrutinize, improve, and streamline complex work processes.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span className="About">About</span>
        <span> Me </span>
        <span>.....</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
