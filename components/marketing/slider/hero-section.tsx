import React from 'react';
import Link from "next/link";
import { Icons } from "@/components/icons";

interface HeroSectionProps {
  id: number
  image: string,
}

interface HeroSectionCardProps {
  data: HeroSectionProps;
}

const HeroSection: React.FC<HeroSectionCardProps> = ({data}) => {
  return (
    <div className="item w-full xl:h-[733px] h-[500px]" style={{width: "100%", display: "inline-block"}}>
      <div className="w-full h-full relative md:bg-center"
           style={{
             backgroundImage: `url(${data.image})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover"
           }}>
        <div className="container mx-auto flex items-center  h-full">
          <div className="w-full h-full xl:flex items-center pt-20 xl:pt-0">
            <div className="md:w-[626px] w-full">
              <p className="md:text-[34px] text-[20px] font-medium text-qblack mb-[7px]">
                Fashion Hunt
              </p>
              <h1
                className="md:text-[60px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]">Shop
                the Hottest Brands and Designs at Shop {data.id}</h1>
              <Link href="#">
                <div
                  className="flex justify-center items-center bg-[#00cad7] w-[160px] h-[52px] group rounded-lg hover:text-white relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer">
                  <div className="flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10">
                    <span className="text-sm font-600 tracking-wide leading-7 mr-2">
                      Shop Now
                    </span>
                    <Icons.chevronRight/>
                  </div>
                  <div
                    className="w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
                    style={{transition: "transform 0.25s ease-in-out 0s"}}>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;