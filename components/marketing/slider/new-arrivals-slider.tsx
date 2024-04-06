"use client"
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import products from "@/components/marketing/slider/newArrivalsSlider.json"
import ProductCard from "@/components/marketing/card/product-card";

const NewArrivalsSlider = () => {
  const plugin = React.useRef(
    Autoplay({delay: 1000, stopOnInteraction: true})
  )
  return (
    <div className="container bg-white mb-14">

      <div className="mt-4">
        <h3 className="font-medium text-2xl">
          <span className="text-[#00cad7] mr-2">New</span>
          Arrivals
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
            <CarouselItem key={index} className="basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/4">
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

export default NewArrivalsSlider;