import React from 'react';
import Link from "next/link";

interface Product {
  id: number,
  name: string,
  href: string,
  price: string,
  description: string,
  options: string,
  imageSrc: string,
  imageAlt: string,
}

interface ProductCardProps {
  product: Product;
}

const SingleProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/products/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0"/>
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.options}</p>
          <p className="text-base font-medium text-gray-900">{product.price}</p>
        </div>
        <div className="mt-6">
          <Link
            href="#"
            className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;