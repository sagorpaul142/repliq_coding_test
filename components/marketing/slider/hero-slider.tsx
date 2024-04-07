"use client"
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroSection from "@/components/marketing/slider/hero-section";

const data = [
  {
    id: 1,
    image: "/images/hero-slider/banner-5.png"
  },
  {
    id: 2,
    image: "/images/hero-slider/banner-5.1.png"
  },
  {
    id: 3,
    image: "/images/hero-slider/banner-5.2.png"
  },
]

const HeroSlider = () => {
  const plugin = React.useRef(
    Autoplay({delay: 3000, stopOnInteraction: true})
  )
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="">
              <HeroSection data={item}/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </div>
  );
};

export default HeroSlider;