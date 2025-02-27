import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";
const ShopPage = () => {
  const list = [
    "Hepsini Keşfet",
    "Yeni",
    "Jean",
    "Elbise",
    "Tişört",
    "Ceket",
    "Ayakkabı",
    "Aksesuar",
  ];
  const [activeCategory, setActiveCategory] = useState("Hepsini Keşfet");

  const filteredProducts =
    activeCategory === "Hepsini Keşfet"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <div className="mx-auto my-8 flex flex-col justify-start max-w-sm">
        <ul className="flex gap-4">
          {list.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveCategory(item)}
                className={`px-1 py-2 border-1 border-black rounded-none transition ${
                  activeCategory === item
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="mb-4 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-3xl dark:text-white">
        İlginizi Çekebilir
      </h1>

      <div className="flex flex-wrap justify-center items-start md:grid-cols-3 lg:grid-cols-4 gap-4 p-0">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">
            Bu kategoride ürün bulunmamaktadır.
          </p>
        )}
      </div>
    </>
  );
};

export default ShopPage;
