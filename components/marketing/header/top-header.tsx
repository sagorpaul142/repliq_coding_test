import React from 'react';
import Link from "next/link";
const TopHeader = () => {
  return (
    <div className="w-full bg-white h-10 border-b border-qgray-border quomodo-shop-top-bar">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">

          <div className="topbar-nav">
            <ul className="flex space-x-6">
              <li>
                <Link href="#">
                  <span className="text-xs leading-6 text-black font-medium">
                    Account
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-xs leading-6 text-black font-medium">
                    Track Order
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-xs leading-6 text-black font-medium">
                  Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="topbar-dropdowns sm:block hidden">
            <div className="flex space-x-6">
              <div className="country-select flex space-x-1 items-center">

                <select
                  id="location"
                  name="location"
                  className="block rounded-md py-1.5 pl-3 text-gray-900 sm:text-sm sm:leading-6 focus-visible:outline-0"
                  defaultValue="United State"
                >
                  <option>United State</option>
                  <option>Bangladesh</option>
                  <option>India</option>
                </select>

                <select
                  id="location"
                  name="location"
                  className="block rounded-md py-1.5 pl-3 text-gray-900 sm:text-sm sm:leading-6 focus-visible:outline-0"
                  defaultValue="BDT"
                >
                  <option>USD</option>
                  <option>BDT</option>
                </select>

                <select
                  id="location"
                  name="location"
                  className="block rounded-md py-1.5 pl-3 text-gray-900 sm:text-sm sm:leading-6 focus-visible:outline-0"
                  defaultValue="Bangla"
                >
                  <option>Bangla</option>
                  <option>English</option>
                </select>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;