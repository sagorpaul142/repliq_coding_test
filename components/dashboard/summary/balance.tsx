import React from 'react';
import { Icons } from "@/components/icons";

const Balance = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div
        className="p-6 mb-8 bg-white border rounded-lg border-stroke dark:border-dark-3 dark:bg-dark-2 lg:px-4 xl:px-6">
        <div
          className="mb-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary/[0.06] dark:bg-primary/10 text-primary">
          <Icons.dollarSign/>
        </div>
        <div className="flex items-end justify-between">
          <div>
                    <span
                      className="block mb-1 text-2xl font-bold leading-none text-dark dark:text-white lg:text-xl xl:text-2xl">
                      $12,489
                    </span>
            <span className="text-sm text-body-color dark:text-dark-6">
                      Total Balance
                    </span>
          </div>
          <div>
            <p className="inline-flex items-center text-sm font-medium">
              <span>0.39%</span>

              <span className="pl-1">
                      <Icons.arrowUp/>
                    </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;