"use client"
import React, { useState } from 'react';
import { Icons } from "@/components/icons";
import { Disclosure, RadioGroup } from "@headlessui/react";

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  colors: [
    {name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700'},
    {name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400'},
    {name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500'},
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Care',
      items: [
        'Spot clean as needed',
        'Hand wash with mild soap',
        'Machine wash interior dividers',
        'Treat handle and tabs with leather conditioner',
      ],
    },
    {
      name: 'Shipping',
      items: [
        'Free shipping on orders over $300',
        'International shipping available',
        'Expedited shipping options',
        'Signature required upon delivery',
      ],
    },
    {
      name: 'Returns',
      items: [
        'Easy return requests',
        'Pre-paid shipping label included',
        '10% restocking fee for returns',
        '60 day return window',
      ],
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  return (
    <>
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
        </div>

        {/* Reviews */}
        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <Icons.star
                  key={rating}
                  className={classNames(
                    product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{product.rating} out of 5 stars</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>

          <div
            className="space-y-6 text-base text-gray-700"
            dangerouslySetInnerHTML={{__html: product.description}}
          />
        </div>

        <form className="mt-6">
          {/* Colors */}
          <div>
            <h3 className="text-sm text-gray-600">Color</h3>

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
              <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
              <span className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({active, checked}) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </span>
            </RadioGroup>
          </div>

          <div className="mt-10 flex">
            <button
              type="submit"
              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
            >
              Add to cart
            </button>

            <button
              type="button"
              className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            >
              <Icons.heart className="h-6 w-6 flex-shrink-0" aria-hidden="true"/>
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
        </form>

        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>

          <div className="divide-y divide-gray-200 border-t">
            {product.details.map((detail) => (
              <Disclosure as="div" key={detail.name}>
                {({open}) => (
                  <>
                    <h3>
                      <Disclosure.Button
                        className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              {detail.name}
                            </span>
                        <span className="ml-6 flex items-center">
                              {open ? (
                                <Icons.minus
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <Icons.plus
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                      <ul role="list">
                        {detail.items.map((item) => (
                          <li key={item} className="list-disc">{item}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductInfo;