import girl from "../images/category2.jpg";
import shoe from "../images/shoe.jpg";
import dress from "../images/category.jpg";
import accesories from "../images/accesories.jpg";
import Banner from "../components/Banner";

export default function HomePage() {
  const categories = [
    { src: girl, label: "Women" },
    { src: shoe, label: "Shoes" },
    { src: accesories, label: "Accessories" },
    { src: dress, label: "Dresses" },
  ];
  return (
    <>
      <Banner />
      <div className="flex justify-center items-center py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group flex justify-center items-center h-full w-full"
            >
              <img
                className="object-center object-cover h-full w-full"
                src={category.src}
                alt={category.label}
              />
              <button className="absolute bottom-4 z-10 text-base font-medium text-gray-800 py-3 w-36 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                {category.label}
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
