
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import banner from '../images/banner.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
const Slider = () => {
  return (
    
       <div className="w-full max-w-7xl h-[300px] md:h-[400px] lg:h-[500px] mt-8 flex items-center justify-center">
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className=" w-full h-full rounded-lg shadow-lg" 
      >
        <SwiperSlide>
          <img src={banner} className='slider-image w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} className='slider-image w-full h-full object-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} className='slider-image w-full h-full object-cover'/>
        </SwiperSlide>
        
      </Swiper>
        </div> 
    
     
  )
}

export default Slider
