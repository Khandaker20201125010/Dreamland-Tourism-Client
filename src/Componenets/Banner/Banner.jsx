

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-full ">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><div className='slide slide1'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-cyan-300 m-auto font-bold'>Dreamland Tourism</h1>
              <p className='text-xl text-center m-auto w-2/3 text-cyan-300 mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>

              <div className='m-auto text-center mt-5'>
                <button className='btn text-cyan-300 w-40 rounded-2xl btn-outline btn-info text-xl'>Explore</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className='slide slide2'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-cyan-300 m-auto font-bold'>Dreamland Tourism</h1>
              <p className='text-xl text-center m-auto w-2/3 text-cyan-300 mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-cyan-300 w-40 rounded-2xl btn-outline btn-info  text-xl'>Explore</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className='slide slide3'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-cyan-300 m-auto font-bold'>Dreamland Tourism</h1>
              <p className='text-xl text-center m-auto w-2/3 text-cyan-300 mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-cyan-300 w-40 rounded-2xl btn-outline btn-info  text-xl'>Explore</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className='slide slide4'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-cyan-300 m-auto font-bold'>Dreamland Tourism</h1>
              <p className='text-xl text-center m-auto w-2/3 text-cyan-300 mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-cyan-300 w-40 rounded-2xl btn-outline   btn-info text-xl'>Explore</button>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className='slide slide5'>
            <div className='m-auto'>
              <h1 className='text-8xl text-center text-cyan-300 m-auto font-bold'>Dreamland Tourism</h1>
              <p className='text-xl text-center m-auto w-2/3 text-cyan-300 mt-5 font-bold'>Best place to find dream land and house. To find luxury and best land you are in the right place.</p>
              <div className='m-auto text-center mt-5'>
                <button className='btn text-cyan-300 w-40 rounded-2xl btn-outline btn-info    text-xl'>Explore</button>
              </div>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </>

    </div>
  );
};

export default Banner;