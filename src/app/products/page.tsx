
import React from 'react';
import Image from 'next/image'; // Importing Image from next/image

const Products = () => {
  const productData = [
    {id: 1, name: 'Basmati Rice', price: 1050, description: '1121 Steam Rice', image: '/2.jpg'},
    {id: 2, name: 'Basmati Rice', price: 1050, description: '1121 Basmati Rice', image: '/5.jpg'},
    {id: 3, name: 'Basmati Rice', price: 1050, description: 'Super Kernal Rice', image: '/2.jpg'},
    {id: 4, name: 'Non Basmati Rice', price: 1050, description: '386 Basmati Rice', image: '/5.jpg'},
    {id: 5, name: 'Non Basmati Rice', price: 1050, description: 'C-9 Rice', image: '/2.jpg'},
    {id: 6, name: 'Non Basmati Rice', price: 1050, description: 'Long Grain I-6 Rice', image: '/5.jpg'},
  ];

  // Format price to currency
  const formatPrice = (price:number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className="products grid grid-cols-1 md:grid-cols-3 gap-40 px-10 my-10">
      {productData.map((product) => (
        <div key={product.id} className="product-card bg-white p-6 rounded-md shadow-md text-center">
          <Image
            src={product.image}
            alt={product.name} // Correct alt text
            width={300}         // Define width
            height={200}        // Define height
            className="rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-xl font-bold text-blue-500">{formatPrice(product.price)}</div>  {/* Formatted Price */}
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
