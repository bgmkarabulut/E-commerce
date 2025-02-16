import React from 'react'
//import pic from '../images/dress2.jpg'
const ProductCard = ({pic,title}) => {
  return (
    <div className='border rounded-lg shadow-lg  shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-4 flex flex-col items-center text-center w-full max-w-[250px]'>
      <div>
      <img className="card-img w-full h-64 object-cover rounded-md"src={pic} alt={title}  />
      <h2 className='card-title text-lg font-semibold mt-2'>{title}</h2>
      <p className='card-text '>
        I make
      </p>
      </div>
   
    </div>

    
   
  )
}

export default ProductCard
