import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";

interface ProductProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string,
  rating: {
    rate: number,
    count: number
  },
}
interface ProductCardProps {
  product: ProductProps;
}
const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <Card>
      <CardHeader className="flex-row justify-center p-2">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-[435px]"
        />
      </CardHeader>
      <CardContent>
        <Link href={`/product/${product.id}`}>
          <h5 className="text-md font-semibold tracking-tight text-slate-900 line-clamp-1">
            {product.title}
          </h5>
        </Link>
        <div className="my-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900 mr-0.5">{product.price}</span>
            <span className="text-sm text-slate-900 line-through">$9</span>
          </p>
          <div className="flex items-center">
            <Icons.star color="yellow" fill="yellow" />
            <Icons.star color="yellow" fill="yellow" />
            <Icons.star color="yellow" fill="yellow" />
            <Icons.star color="yellow" fill="yellow" />
            <Icons.star color="yellow" fill="yellow" />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Link
          href="#"
          className="flex items-center justify-center w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <Icons.shoppingCart className="mr-2 h-6 w-6" />
          Add to cart
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;