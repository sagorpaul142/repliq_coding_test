"use client"
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import ProductReviewSection from "@/components/marketing/product-review-section";
import ProductInfo from "@/components/marketing/single-product/product-info";
import { classNames } from "@/lib/utils";

const product = {
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-02.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-03.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
  ],
}


const SingleProduct = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {product.images.map((image) => (
                <Tab
                  key={image.id}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({selected}) => (
                    <>
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img src={image.src} alt="" className="h-full w-full object-cover object-center"/>
                        </span>
                      <span
                        className={classNames(
                          selected ? 'ring-indigo-500' : 'ring-transparent',
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
            {product.images.map((image) => (
              <Tab.Panel key={image.id}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Product info */}
        <ProductInfo/>

      </div>
      <ProductReviewSection/>
    </div>
  );
};

export default SingleProduct;