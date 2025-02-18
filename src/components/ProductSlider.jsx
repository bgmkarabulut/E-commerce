import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import dress3 from "../assets/dress1.jpg";
import dress4 from "../images/dress4.jpg";
import dress5 from "../images/dress5.jpg";
import clt2 from "../images/clt2.jpg";
import clt3 from "../images/clt3.jpg";
import clt from "../images/clt1.jpg";
import clt4 from "../images/clt4.jpg";
import clt8 from "../images/clt8.jpg";
import pant from "../images/pants.jpg";
import greendress from "../images/green.jpg";
import clt5 from "../images/clt5.jpg";
import clt7 from "../images/clt7.jpg";
import clt6 from "../images/clt6.jpg";
import "./ProductSlide.css";
const ProductSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      watchSlidesProgress={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <SwiperSlide>
        <ProductCard pic={clt2} title="jacket" price={"€600"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={dress3} title="dress" price={"€499"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={dress4} title="dress" price={"€299"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={dress5} title="pants" price={"€279"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt3} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt4} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt8} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={pant} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt5} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt6} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={greendress} title="jacket" price={"€179"} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard pic={clt7} title="jacket" price={"€179"} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
