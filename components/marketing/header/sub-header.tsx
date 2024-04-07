"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/repliq2x-logo.png"
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet"
import { Search } from "lucide-react";
import { classNames } from "@/lib/utils";
import { Icons } from "@/components/icons";

const navigation = [
  {name: 'Dashboard', href: '#', current: true},
  {name: 'Team', href: '#', current: false},
  {name: 'Projects', href: '#', current: false},
  {name: 'Calendar', href: '#', current: false},
  {name: 'Documents', href: '#', current: false},
  {name: 'Reports', href: '#', current: false},
]

const SubHeader = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <div className="w-full h-[86px] bg-white lg:block hidden">
          <div className="container mx-auto h-full">
            <div className="relative h-full">
              <div className="flex justify-between items-center h-full">
                <div>
                  <Link href="/home">
                    <Image width="36" height="36" src={Logo} alt="logo"/>
                  </Link>
                </div>
                <div className="w-[517px] h-[44px]">
                  <div className="w-full h-full flex items-center  border bg-white search-com">
                    <div className="flex-1 h-full">
                      <form action="#" className="h-full">
                        <Input variant="bless" type="text" placeholder="Search Product..."/>
                      </form>
                    </div>
                    <div className="w-[1px] h-[22px] bg-gray-400"></div>

                    <select
                      id="location"
                      name="location"
                      className="block rounded-md py-1.5 pl-3 text-gray-900 sm:text-sm sm:leading-6 focus-visible:outline-0 w-56"
                      defaultValue=""
                    >
                      <option>All Categories</option>
                      <option>United State</option>
                      <option>Bangladesh</option>
                      <option>India</option>
                    </select>

                    <button className="w-[93px] h-full text-sm font-600 bg-[#48B7E9]  search-btn" type="button">
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="compaire relative">
                    <Link href="#">
                      <Icons.compare/>
                    </Link>
                    <span
                      className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-[#48B7E9] text-blackPrimary">2</span>
                  </div>
                  <div className="favorite relative">
                    <Link href="#">
                      <Icons.wishlist/>
                    </Link>
                    <span
                      className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-[#48B7E9] text-blackPrimary">1</span>
                  </div>
                  <div className="cart-wrapper group relative py-4">
                    <div className="cart relative cursor-pointer">
                      <Link href="/cart">
                        <Icons.cart/>
                      </Link>
                      <span
                        className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-[#48B7E9] text-blackPrimary">15</span>
                    </div>
                  </div>
                  <div>
                    <Link href="#">
                    <span>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                           xmlns="http://www.w3.org/2000/svg"><path
                        d="M19.992 19.729C19.9004 18.043 19.438 16.4886 18.617 15.1176C17.6046 13.4237 16.2096 12.1244 14.4679 11.2475C14.0773 11.0522 13.878 10.9645 13.3878 10.7772L12.9334 10.6138L13.4954 10.1833C14.5476 9.38621 15.3408 8.08689 15.6118 6.70387C15.6955 6.28936 15.7035 5.22918 15.6317 4.78278C15.4643 3.77043 14.9582 2.70227 14.2766 1.92507C13.4356 0.976485 12.2439 0.30291 11.0084 0.079713C10.7971 0.0398565 10.1515 0 9.75289 0C9.60542 0 9.55361 0.00398565 9.53766 0.0079713H9.53368C9.49781 0.011957 9.42607 0.0239139 9.33838 0.0358709H9.32642C9.25468 0.0438422 9.17896 0.0557991 9.10323 0.0677561C8.1666 0.195297 7.01873 0.73336 6.25349 1.41092C5.27302 2.27581 4.59147 3.50339 4.38023 4.78278C4.3045 5.22918 4.31646 6.28936 4.40016 6.70387C4.67118 8.08689 5.46433 9.38621 6.51654 10.1833L7.07852 10.6138L6.62415 10.7772C6.13392 10.9645 5.93464 11.0522 5.54404 11.2475C3.80231 12.1244 2.40335 13.4237 1.39498 15.1176C0.569948 16.4926 0.107613 18.043 0.0159426 19.729L0 20H0.255082H1.1957H18.8123H19.4938H20.008L19.992 19.729ZM5.56397 4.98605C5.73934 3.92188 6.28537 2.95735 7.10642 2.25986C7.91949 1.57035 8.94779 1.19171 10 1.19171C10.2352 1.19171 10.4743 1.21164 10.7094 1.24751C13.1606 1.64607 14.8386 3.95775 14.444 6.39299C14.2686 7.45715 13.7226 8.42168 12.9016 9.11917C12.0885 9.80869 11.0602 10.1873 10.008 10.1873C9.77282 10.1873 9.53368 10.1674 9.29852 10.1315C6.84735 9.72898 5.16939 7.42128 5.56397 4.98605ZM2.54285 15.5281C3.73057 13.7146 5.31287 12.4751 7.25389 11.8414C8.17059 11.5424 9.09526 11.391 10.004 11.391C10.9127 11.391 11.8374 11.5424 12.7541 11.8414C14.6951 12.4751 16.2814 13.7146 17.4651 15.5281C18.047 16.4169 18.5134 17.6963 18.7086 18.8721H1.29932C1.49462 17.6963 1.96094 16.4169 2.54285 15.5281Z"
                        fill="black"></path></svg>
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block w-full h-[60px] bg-white">
          <div className="w-full h-full flex justify-between items-center px-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2"
                onClick={() => setOpen(true)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"></path>
              </svg>
            </div>
            <div>
              <Link href="/home">
                <Image width="36" height="36" src={Logo} alt="logo"/>
              </Link>
            </div>
            <div className="cart relative cursor-pointer">
              <Link href="/cart">
                <Icons.cart/>
              </Link>
              <span
                className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-[#48B7E9] text-blackPrimary">
              15
            </span>
            </div>
          </div>
        </div>

        {
          open &&
            <Sheet
                open={open}
                onOpenChange={setOpen}
            >
                <SheetContent
                    side="left"
                    className={`!max-w-72 ${open ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
                >
                    <SheetHeader>
                        <div className="flex shrink-0 items-center justify-center py-4">
                            <SheetClose asChild>
                                <Link href="/">
                                    <Image
                                        width={56}
                                        height={56}
                                        className=""
                                        src={Logo}
                                        alt="Your Company"
                                    />
                                </Link>
                            </SheetClose>
                        </div>
                    </SheetHeader>
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto overflow-x-hidden sidebar-scroll">
                        <>
                            <div className="mt-2 flex shadow-sm">
                                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                    <Input variant="ny" type="text"
                                           className="rounded-none focus-visible:ring-transparent"
                                           placeholder="Search Product..."/>
                                </div>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    <Search className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                </button>
                            </div>
                        </>

                        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <SheetClose asChild key={item.name}>
                                  <li key={item.name}>
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                        'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold'
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                </SheetClose>
                              ))}
                            </ul>
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        }

      </>
    )
      ;
  }
;

export default SubHeader;