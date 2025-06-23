"use client";

import Image from "next/image";
import { IProductStore } from "@/lib/types/data";
import Link from "next/link";

type CardProductProps = IProductStore & { 
  detailStatus?: boolean;
}

function CardProduct ({detailStatus = true, ...props}: CardProductProps) {
  
  return (
    <div className="w-64 h-auto rounded-lg border border-gray-100 bg-white shadow-xs">
     {props.image ? (
      <Image
        className="object-cover rounded-t-lg"
        width={250}
        height={300}
        sizes="(max-width: 768px) 100vw, 400px"
        alt="Card Image"
        src={props.image}
      />
     ) : null}

      <div className="p-4 sm:p-6">
        <Link href="#">
          <h3 className="text-lg font-medium text-gray-900">{props.title}</h3>
        </Link>

        <p className="mt-2 text-sm/relaxed text-gray-500">
          {props.description}
        </p>

        <Link
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
        </Link>
        {detailStatus && <Link href={`/products/${props.id}`}>details</Link>}
      </div>
    </div>
  );
}
export default CardProduct;
