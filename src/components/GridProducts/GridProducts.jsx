import "./GridProducts.scss";
{
    /*import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";*/
}

export default function GridProducts() {
    return (
        <section className="section-first container">
            <div className="section-first__container">
                <div className="section-first__div">
                    <img src="/barbacoaexample.png" alt="" />
                    <hr />
                    <p className="section-first__p-shrimp">80LB PREMIUM</p>
                    <ul>
                        <li>16 Ganchos gruesos</li>
                        <li>1 Carbonera</li>
                        <li>1 Termometro</li>
                    </ul>
                    <p className="section-first__p-price">$ 1.100.000</p>
                </div>

                <div className="section-first__div">
                    <div className="section-first__red-div">
                        <img src="/stars.svg" alt="" />
                        <p className="section-first__popular-p">MÁS POPULAR</p>
                    </div>

                    <img src="/barbacoaexample.png" alt="" />
                    <hr />
                    <p className="section-first__p-shrimp">80LB PREMIUM</p>
                    <ul>
                        <li>16 Ganchos gruesos</li>
                        <li>1 Carbonera</li>
                        <li>1 Termometro</li>
                    </ul>
                    <p className="section-first__p-price">$ 1.100.000</p>
                </div>

                <div className="section-first__div">
                    <img src="/barbacoaexample.png" alt="" />
                    <hr />
                    <p className="section-first__p-shrimp">80LB PREMIUM</p>
                    <ul>
                        <li>16 Ganchos gruesos</li>
                        <li>1 Carbonera</li>
                        <li>1 Termometro</li>
                    </ul>
                    <p className="section-first__p-price">$ 1.100.000</p>
                </div>
            </div>

            <div className="section-first__div-button">
                <button className="section-first__button">
                    TODOS LOS PRODUCTOS
                </button>
            </div>

            {/* ----------- CARRUSEL -----------  */}

            {/*<Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            ></Swiper>

            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </section>
    );
}
