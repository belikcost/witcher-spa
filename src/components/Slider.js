import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import geralt from '/src/img/geralt.jpg';
import ainyfer from '/src/img/ainyfer.jpg';
import ciri from '/src/img/ciri.jpg';
import emgur from '/src/img/emgur.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.scss';

SwiperCore.use([Pagination, Navigation]);


export const Slider = () => {

    return (
        <div className="slider">
            <div className="slider_container">
                <header>
                    <h2>Актерский состав</h2>
                    <div className="slider__nav-container">
                        <span className="slider__button-prev"/>
                        <span className="slider__button-next"/>
                    </div>
                </header>
            </div>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                initialSlide={1}
                pagination={{
                    type: 'progressbar',
                }}
                navigation={{
                    nextEl: '.slider__button-next',
                    prevEl: '.slider__button-prev',
                    disabledClass: 'disabled'
                }}
                className="slider__content"
            >
                <SwiperSlide>
                    <div className="slider_slide">
                        <img src={geralt} alt="Геральт"/>
                        <div className="slider_slide-content">
                            <div>
                                <h4>Геральт</h4>
                                <h5>Генри Кавилл</h5>
                            </div>
                            <p>
                                Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_slide">
                        <img src={ainyfer} alt="Йеннифэр"/>
                        <div className="slider_slide-content">
                            <div>
                                <h4>Йеннифэр</h4>
                                <h5>Аня Чалотра</h5>
                            </div>
                            <p>
                                Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_slide">
                        <img src={ciri} alt="Цири"/>
                        <div className="slider_slide-content">
                            <div>
                                <h4>Цири</h4>
                                <h5>Фрейя Аллан</h5>
                            </div>
                            <p>
                                Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_slide">
                        <img src={emgur} alt="Эмгыр вар Эмрейс"/>
                        <div className="slider_slide-content">
                            <div>
                                <h4>Эмгыр вар Эмрейс</h4>
                                <h5>Барт Эдвардс</h5>
                            </div>
                            <p>
                                Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_slide">
                        <img src={ciri} alt="Цири"/>
                        <div className="slider_slide-content">
                            <div>
                                <h4>Цири</h4>
                                <h5>Фрейя Аллан</h5>
                            </div>
                            <p>
                                Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider_slide">
                        <img src={ciri} alt="Цири"/>
                        <div className="slider_slide-content">
                            <div>
                                <h4>Цири</h4>
                                <h5>Фрейя Аллан</h5>
                            </div>
                            <p>
                                Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}