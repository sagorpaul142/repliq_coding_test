"use client"
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import products from "@/components/marketing/slider/newArrivalsSlider.json";
import ProductCard from "@/components/marketing/card/product-card";
import Autoplay from "embla-carousel-autoplay";

const RelatedProductsSlider = () => {
  const plugin = React.useRef(
    Autoplay({delay: 4000, stopOnInteraction: true})
  )
  return (
    <div className="container mb-14">
      <div className="mt-4">
        <h3 className="font-medium text-2xl border-b border-[#ccc] pb-5 mb-3">
          Related Products
        </h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
              <div className="my-3">
                <ProductCard product={product}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RelatedProductsSlider;