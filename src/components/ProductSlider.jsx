import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";
import { products } from "../data/products"; // Ürünleri bir data dosyasından çektim
import "./ProductSlide.css";

const ProductSlider = () => {
  const featuredProductIds = [1, 2, 3, 5, 8, 11, 15, 4]; // Sadece seçili ID’ler Slider'da olacak
  const featuredProducts = products.filter((product) =>
    featuredProductIds.includes(product.id)
  );

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      }}
      className="w-full max-w-6xl mx-auto"
    >
      {featuredProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
