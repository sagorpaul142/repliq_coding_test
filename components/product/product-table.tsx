"use client"
import React, { useState, Fragment } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/lib/validations/product";
import { Textarea } from "@/components/ui/textarea";
import ProductView from "@/components/product/product-view";

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

type FormData = z.infer<typeof productSchema>;
type FormDataProduct = z.infer<typeof productSchema>;
const ProductTable = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false)
  const [view, setView] = useState<boolean>(false)

  const addProduct = useForm<FormData>({
    resolver: zodResolver(productSchema),
  });
  const editProduct = useForm<FormDataProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "Product One",
      category: "category1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eaque earum maxime necessitatibus optio pariatur.",
      price: "100",
      image: ""
    }
  });
  const onSaveData = () => {}
  const onsubmit = () => {}
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-10 bg-white mt-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={() => setOpenAddProduct(true)}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
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
                              onClick={() => setView(true)}
                            >
                              <Icons.eye className="mr-2 h-4 w-4"/>
                              View
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem
                              className="flex cursor-pointer items-center"
                              onClick={() => setOpen(true)}
                            >
                              <Icons.pencil className="mr-2 h-4 w-4"/>
                              Edit
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

      {
        openAddProduct && (
          <Sheet open={openAddProduct} onOpenChange={setOpenAddProduct}>
            <SheetContent className="sm:max-w-[50vw] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Add Product</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolore!
                </SheetDescription>
              </SheetHeader>
              <Form {...addProduct}>
                <form
                  onSubmit={addProduct.handleSubmit(onSaveData)}
                >
                  <div className="grid gap-4 py-4">
                    <FormField
                      control={addProduct.control}
                      name="name"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input
                              variant="ny"
                              placeholder="Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={addProduct.control}
                      name="category"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an user role"/>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="category1">Category 1</SelectItem>
                              <SelectItem value="category2">Category 2</SelectItem>
                              <SelectItem value="category3">Category 3</SelectItem>
                              <SelectItem value="category4">Category 4</SelectItem>
                              <SelectItem value="category5">Category 5</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={addProduct.control}
                      name="price"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              variant="ny"
                              placeholder="Audit Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={addProduct.control}
                      name="description"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              className="resize-none"
                              rows={5}
                              placeholder="Type description here."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={addProduct.control}
                      name="image"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Image</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              variant="ny"
                              placeholder="Audit Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
              <SheetFooter className="mt-5">
                <SheetClose asChild>
                  <Button type="submit">Save</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )
      }

      {
        open && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="sm:max-w-[50vw] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Edit Product</SheetTitle>
                <SheetDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dolore!
                </SheetDescription>
              </SheetHeader>
              <Form {...editProduct}>
                <form
                  onSubmit={editProduct.handleSubmit(onsubmit)}
                >
                  <div className="grid gap-4 py-4">
                    <FormField
                      control={editProduct.control}
                      name="name"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input
                              variant="ny"
                              placeholder="Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={editProduct.control}
                      name="category"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an user role"/>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="category1">Category 1</SelectItem>
                              <SelectItem value="category2">Category 2</SelectItem>
                              <SelectItem value="category3">Category 3</SelectItem>
                              <SelectItem value="category4">Category 4</SelectItem>
                              <SelectItem value="category5">Category 5</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={editProduct.control}
                      name="price"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              variant="ny"
                              placeholder="Audit Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={editProduct.control}
                      name="description"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              className="resize-none"
                              rows={5}
                              placeholder="Type description here."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={editProduct.control}
                      name="image"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Image</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              variant="ny"
                              placeholder="Audit Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
              <SheetFooter className="mt-5">
                <SheetClose asChild>
                  <Button type="submit">Update</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )
      }
      <ProductView view={view} setView={setView} />
    </>
  );
};

export default ProductTable;