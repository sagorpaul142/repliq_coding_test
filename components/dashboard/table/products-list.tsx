import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

const tableData = [
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-01.jpg',
    imageAlt: 'product',
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: '$269',
    sold: '22',
    profit: '$45',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-02.jpg',
    imageAlt: 'product',
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: '$546',
    sold: '34',
    profit: '$125',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-03.jpg',
    imageAlt: 'product',
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: '$444',
    sold: '64',
    profit: '$247',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-04.jpg',
    imageAlt: 'product',
    name: 'HP Probook 450',
    category: 'Electronics',
    price: '$499',
    sold: '72',
    profit: '$103',
  },
]

const headers = [
  {
    name: 'Product Name'
  },
  {
    name: 'Category'
  },
  {
    name: 'Price'
  },
  {
    name: 'Sold'
  },
  {
    name: 'Profit'
  },
]
const ProductsList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 bg-white mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the products, category, price, sold and profit.
          </p>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                <tr className='border-b border-stroke dark:border-dark-3'>
                  {headers.map((header, index) => (
                    <th
                      className={`py-5 px-4 last:pr-8`}
                      key={index}
                    >
                      <p className='text-base font-medium text-left text-dark dark:text-white'>
                        {header.name}
                      </p>
                    </th>
                  ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {tableData.map((person) => (
                  <tr key={person.name}>
                    <td className='whitespace-nowrap px-4 py-4 pr-3 text-sm font-medium text-gray-900'>
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{person.category}</td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{person.price}</td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{person.sold}</td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{person.profit}</td>
                    <td>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className="flex h-8 w-8 items-center justify-center focus-visible:outline-0 rounded-md border transition-colors hover:bg-muted">
                          <Icons.ellipsis className="h-4 w-4"/>
                          <span className="sr-only">Open</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            className="flex cursor-pointer items-center"
                          >
                            <Icons.pencil className="mr-2 h-4 w-4"/>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator/>
                          <DropdownMenuItem
                            className="flex cursor-pointer items-center"
                          >
                            <Icons.delete className="mr-2 h-4 w-4"/>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;