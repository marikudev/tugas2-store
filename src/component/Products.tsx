"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";


export default function Products() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
    console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-5 gap-4">
        <h1>My Product</h1>
        {products.map((product) => {
            return (
              <div className="column mb-4" key={product.id}>
                <CardProduct
                  title={product.title}
                  price={product.price}
                  description={product.description}
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

function CardProduct(props: CardProductProps) {
  return (
    <div className="w-64 h-auto rounded-lg border border-gray-100 bg-white shadow-xs">
      <Image
        className="object-cover rounded-t-lg"
        width={250}
        height={300}
        sizes="(max-width: 768px) 100vw, 400px"
        alt="Card Image"
        src={props.image}
      />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">
            {props.title}
          </h3>
        </a>

        <p className="mt-2 text-sm/relaxed text-gray-500">
          {props.description}
        </p>

        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Add to cart
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}
