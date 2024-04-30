
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import k1 from '../../assets/image/k1.jpeg'
import k2 from '../../assets/image/k2.jpg'
import k3 from '../../assets/image/k3.jpg'
import k4 from '../../assets/image/k4.jpg'
import k5 from '../../assets/image/k5.jpg'
import k6 from '../../assets/image/k6.jpg'
import k7 from '../../assets/image/k7.jpg'
import k8 from '../../assets/image/k8.jpeg'
import k9 from '../../assets/image/k9.jpeg'
// Import Swiper styles
import "swiper/swiper-bundle.css";



const MoreSpot = () => {
    return (
        <>
            <h3 className="text-3xl font-bold mt-20 text-center">More Sport </h3> <br />
            <div>
                <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                    <SwiperSlide>
                        <img className="w-full h-full" src={k1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k6} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k7} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k8} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full" src={k9} alt="" /></SwiperSlide>
                </Swiper>

            </div>

        </>
    );
}

export default MoreSpot;
