
import React from 'react';

const Card = ({ products }) => {
    console.log(products);
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(products).map(([id, product]) => (
               <div key={id} className="border-l-8 border-green-900 p-8 m-8 rounded-lg bg-green-50">
               <h3 className="text-lg font-semibold">{product.title}</h3>
               <p className="text-gray-600 mb-2">Subcategory: {product.subcategory}</p>
               <p className="text-gray-800 mb-2">Price: ${product.price}</p>
               <p className="text-gray-600">Popularity: {product.popularity}</p>
           </div>
           
            ))}
        </div>
    );
};

export default Card;

