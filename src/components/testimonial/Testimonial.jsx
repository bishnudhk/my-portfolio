import React from "react";
import "./Testimonial.css";
import AVTR1 from "../images/avtr1.jpg";
import AVTR2 from "../images/avtr2.jpg";
import AVTR3 from "../images/avtr3.jpg";
import AVTR4 from "../images/avtr4.jpg";
import AVTR5 from "../images/avtr5.jpg";

// import Swiper core and required modules
import { Navigation,Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Shonam Baral",
    review:
      "Your project's overview consists of its title, category, project  attributes, and search tags. The information you include here    your first impression "
  },
  {
    avatar: AVTR2,
    name: "Sagar Poudel",
    review:
      "Your project's overview consists of its title, category, project  attributes, and search tags. The information you include here    your first impression to prospective clients"
  },
  {
    avatar: AVTR3,
    name: "Shatta Wala",
    review:
      "Your project's overview consists of its title, category, project  attributes, and search tags. The information you include here    your first impression to prospective "
  },
  {
    avatar: AVTR4,
    name: "David Louis",
    review:
      "Your project's overview consists of its title, category, project  attributes, and search tags. The information you include here    your first impression to prospective clients, so you'll want it to",
  },
  {
    avatar: AVTR5,
    name: "Michael Iart",
    review:
      "Your project's overview consists of its title, category, project  attributes, and search tags. The information you include here    your first  so you'll want it to"
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      // {/* // install Swiper modules */}
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} 
         >
      
        {data.map(({ avatar, name, review },index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
