"use client"
import React from 'react';
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import games from "@/public/images/category/icon-games.png"
import headphone from "@/public/images/category/icon-headphone.png"
import laptops from "@/public/images/category/icon-laptops.png"
import phone from "@/public/images/category/icon-phone.png"
import speaker from "@/public/images/category/icon-speaker.png"
import television from "@/public/images/category/icon-television.png"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"


const data = [
  {
    title: "television",
    image: television
  },
  {
    title: "speakers",
    image: speaker
  },
  {
    title: "headphones",
    image: headphone
  },
  {
    title: "laptops",
    image: laptops
  },
  {
    title: "phone",
    image: phone
  },
  {
    title: "games",
    image: games
  },
  {
    title: "headphones",
    image: headphone
  },
  {
    title: "smartphones",
    image: phone
  }
]

const CategorySlider = () => {
  const plugin = React.useRef(
    Autoplay({delay: 2000, stopOnInteraction: true})
  )
  return (
    <div className="container bg-white">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {data.map((category, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
              <div className="my-3">
                <Card className="w-full flex items-center justify-center gap-2 px-1 py-3">
                  <Image className="w-12" width={200} height={50} src={category.image} alt={category.title}/>
                  <span className="text-sm font-semibold capitalize">{category.title}</span>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CategorySlider;