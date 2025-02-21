import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;
  }

  return (
    <div className="font-[sans-serif] p-4 w-full">
      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
        <div className="w-full lg:sticky top-0 lg:col-span-3 grid grid-cols-2 gap-0.5">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full aspect-[182/243] object-top object-cover"
            />
          ))}
        </div>
        <section className="py-7 w-96 max-lg:max-w-6xl mx-auto">
          <h2 className="text-1xl font-bold text-gray-800">{product.title}</h2>

          <p className="mt-6 text-gray-800 text-4xl font-bold">
            {product.price}
          </p>

          <h3 className="mt-6 text-xl font-bold text-gray-800">
            Choose a Size
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {["34", "36", "38", "40", "42", "44"].map((size) => (
              <button
                key={size}
                type="button"
                className="w-10 h-10 border hover:border-gray-800 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <button className="w-full px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md">
              Add to cart
            </button>
            <button className="w-full px-4 py-2.5 border border-gray-800 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md">
              Buy now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
