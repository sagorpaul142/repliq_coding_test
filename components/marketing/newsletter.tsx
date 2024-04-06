import React from 'react';
import { Icons } from "@/components/icons";

const Newsletter = () => {
  return (
    <div className="discount-banner w-full h-[307px] bg-cover flex justify-center items-center "
         style={{background: `url('/images/discount-banner-1.jpg') 0% 0% / cover no-repeat`}}
    >
      <div>
        <div data-aos="fade-up" className="aos-init aos-animate">
          <h1 className="sm:text-3xl text-xl font-700 text-qblack mb-2 text-center">
            <span className="font-semibold">Get </span>
            <span className="mx-1 text-yellow-400">20%</span>
            <span className="font-semibold"> Off Discount Coupon</span>
          </h1>
          <p className="text-center sm:text-[18px] text-sm font-400">
            by Subscribe our Newsletter
          </p>
        </div>
        <div data-aos="fade-right" className="sm:w-[543px] w-[300px] h-[54px] flex mt-8 aos-init aos-animate">
          <div
            className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack">
            <Icons.email/>
            <input
              type="email"
              name="email"
              className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <button type="button" className="sm:w-[158px] w-[80px]  h-full bg-qyellow text-sm font-600 bg-[#48B7E9]">Get
            the Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;