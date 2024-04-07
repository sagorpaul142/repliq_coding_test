"use client"
import React from 'react';
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icons } from "@/components/icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="w-full bg-[#48B7E9] h-[60px] relative z-30  quomodo-shop-nav-bar lg:block hidden">
      <div className="container mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-2 rounded-t-md mt-[6px] relative">
                <Select>
                  <SelectTrigger
                    className="w-full h-[53px] border-0 mt-0.5 focus-visible:outline-0 focus:ring-transparent px-0 py-0">
                    <div className="flex items-center gap-2">
                      <svg
                        className="fill-current" width="14" height="9" viewBox="0 0 14 9" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="1"></rect>
                        <rect y="8" width="14"
                              height="1"></rect>
                        <rect
                          y="4" width="10" height="1"></rect>
                      </svg>
                      <SelectValue placeholder="All Category"/>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="All Category">All Category</SelectItem>
                      <SelectItem value="mobileLaptop">
                        <span className="flex items-center gap-2">
                          <Icons.mobileLaptop/>
                        Apple
                        </span>
                      </SelectItem>
                      <SelectItem value="gamingEntertainment">
                        <span className="flex items-center gap-2">
                          <Icons.gamingEntertainment/>
                          Gaming Entertainment
                        </span>
                      </SelectItem>
                      <SelectItem value="imageVideo">
                        <span className="flex items-center gap-2">
                          <Icons.imageVideo/>
                          Image & Video
                        </span>
                      </SelectItem>
                      <SelectItem value="vehicles">
                        <span className="flex items-center gap-2">
                          <Icons.vehicles/>
                          Vehicles
                        </span>
                      </SelectItem>
                      <SelectItem value="furnitures">
                        <span className="flex items-center gap-2">
                          <Icons.furnitures/>
                          Furnitures
                        </span>
                      </SelectItem>
                      <SelectItem value="sport">
                        <span className="flex items-center gap-2">
                          <Icons.sport/>
                          Sport
                        </span>
                      </SelectItem>
                      <SelectItem value="fooddrinks">
                        <span className="flex items-center gap-2">
                          <Icons.FoodDrinks/>
                          Food & Drinks
                        </span>
                      </SelectItem>
                      <SelectItem value="fashion">
                        <span className="flex items-center gap-2">
                          <Icons.Fashion/>
                          Fashion & Drinks
                        </span>
                      </SelectItem>
                      <SelectItem value="makeupCorner">
                        <span className="flex items-center gap-2">
                          <Icons.makeupCorner/>
                          Makeup Corner
                        </span>
                      </SelectItem>
                      <SelectItem value="babyItems">
                        <span className="flex items-center gap-2">
                          <Icons.babyItems/>
                          Baby Items
                        </span>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li className="relative">
                    <Link href="/home" className={`${pathName === '/home' ? 'font-bold text-white' : ''}`}>
                    <span className="flex items-center text-sm text-qblack font-600 cursor-pointer ">
                      Homepage
                      </span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link href="/products" className={`${pathName === '/products' ? 'font-bold text-white' : ''}`}>
                    <span className="flex items-center text-sm text-qblack font-600 cursor-pointer ">
                      Products
                      </span>
                    </Link>
                  </li>
                  <li className="relative">
                    <Link href="/dashboard">
                    <span className="flex items-center text-sm text-qblack font-600 cursor-pointer ">
                      Dashboard
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-black text-white w-[161px] h-[40px]">
              <Link href="/">
                <div className="black-btn flex justify-center items-center cursor-pointer h-full">
                  <div className="flex space-x-2 items-center">
                  <span className="text-sm font-600">
                    Become a Seller
                  </span>
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

export default Navbar;