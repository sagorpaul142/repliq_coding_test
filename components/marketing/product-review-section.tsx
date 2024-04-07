import React, { Fragment } from 'react';
import { Tab } from "@headlessui/react";
import Review from "@/components/marketing/single-product/review";
import ProductFaq from "@/components/marketing/single-product/product-faq";
import ProductLicense from "@/components/marketing/single-product/product-license";
import { classNames } from "@/lib/utils";


const ProductReviewSection = () => {
  return (
    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
      <Tab.Group as="div">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex space-x-8">
            <Tab
              className={({selected}) =>
                classNames(
                  selected
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                  'whitespace-nowrap border-b-2 py-6 text-sm font-medium focus-visible:outline-0'
                )
              }
            >
              Customer Reviews
            </Tab>
            <Tab
              className={({selected}) =>
                classNames(
                  selected
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                  'whitespace-nowrap border-b-2 py-6 text-sm font-medium focus-visible:outline-0'
                )
              }
            >
              FAQ
            </Tab>
            <Tab
              className={({selected}) =>
                classNames(
                  selected
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                  'whitespace-nowrap border-b-2 py-6 text-sm font-medium focus-visible:outline-0'
                )
              }
            >
              License
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          <Tab.Panel className="-mb-10">
            <h3 className="sr-only">Customer Reviews</h3>
            <Review/>
          </Tab.Panel>

          <Tab.Panel className="text-sm text-gray-500">
            <h3 className="sr-only">Frequently Asked Questions</h3>
            <ProductFaq/>
          </Tab.Panel>

          <Tab.Panel className="pt-10">
            <h3 className="sr-only">License</h3>
            <ProductLicense/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductReviewSection;