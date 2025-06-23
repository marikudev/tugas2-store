'use client';

import React, { useState, useEffect} from 'react';
import { useParams }  from 'next/navigation';
import { IProductStore } from '@/lib/types/data';
import CardProduct from '@/src/component/CardProduct';


export default function DetailProducts() {
  const { slug: productId } = useParams<{ slug: string }>();


  const url = `https://fakestoreapi.com/products/${productId}`;
  const [products, setProducts] = useState<IProductStore>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    }
  )

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
   
    setProducts(dataProduct); // Store as an array to match IProductStore type
    //console.log(products);
  } ;

  useEffect(() => {
    getDataProducts();
  });



    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Product Details</h1>
        <CardProduct
          id={products.id}
          title={products.title}
          price={products.price}
          image={products.image}
          description={products.description}
          detailStatus={false} // Assuming you want to show details in this component
        />
        {/* Here you can fetch and display the product details based on the productId */}
        {/* For example, you could use a fetch call to get the product data from an API */}
        </div>
    );
  
  

}