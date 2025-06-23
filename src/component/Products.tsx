"use client";

import CardProduct from "@/src/component/CardProduct";
import React, { useEffect, useState } from "react";
import { IProductStore } from "@/lib/types/data";


export default function Products() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState<IProductStore[]>([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
  
    setProducts(dataProduct);
    // console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => {
            return (
              <div className="column mb-4" key={product.id}>
                <CardProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </div>
            );
            })
        }
      </div>
    </div>
  );
}

