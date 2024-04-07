import React from 'react';
import { Button } from "@/components/ui/button";

const DiscountSection = () => {
  return (
    <div
      className="h-80 mb-14 flex flex-col justify-center container bg-center-center lg:bg-center-right bg-no-repeat bg-cover"
      style={{backgroundImage: `url('/images/banner-7.jpg')`}}
    >

      <div className="w-[82%] p-[30px] lg:w-[45%] lg:p-[30px] xl:p-12  2xl:w-2/4 2xl:px-20">
        <div className="mb-0.5 text-[13px] xl:text-2xl font-semibold text-[#DD2831]">EXCLUSIVE HEADPHONE</div>
        <h2 className="text-[25px] mb-[15px] lg:text-[30px] lg:mb-8 2xl:text-[52px] font-bold leading-[1.2]">
          Discounts 50% On All Headphone
        </h2>
        <Button>Shop Now</Button>
      </div>

    </div>
  );
};

export default DiscountSection;