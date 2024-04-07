import React, { Fragment, useState } from 'react';
import SidebarFilter from "@/components/marketing/products/sidebar-filter";
import ProductCardSection from "@/components/marketing/products/product-card-section";
import MobileFilter from "@/components/marketing/products/mobile-filter";
import ProductsHeaderSection from "@/components/marketing/products/products-header-section";

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      {value: 'white', label: 'White'},
      {value: 'beige', label: 'Beige'},
      {value: 'blue', label: 'Blue'},
      {value: 'brown', label: 'Brown'},
      {value: 'green', label: 'Green'},
      {value: 'purple', label: 'Purple'},
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      {value: 'new-arrivals', label: 'All New Arrivals'},
      {value: 'tees', label: 'Tees'},
      {value: 'crewnecks', label: 'Crewnecks'},
      {value: 'sweatshirts', label: 'Sweatshirts'},
      {value: 'pants-shorts', label: 'Pants & Shorts'},
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      {value: 'xs', label: 'XS'},
      {value: 's', label: 'S'},
      {value: 'm', label: 'M'},
      {value: 'l', label: 'L'},
      {value: 'xl', label: 'XL'},
      {value: '2xl', label: '2XL'},
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      {value: '0', label: '$0 - $25', checked: false},
      {value: '25', label: '$25 - $50', checked: false},
      {value: '50', label: '$50 - $75', checked: false},
      {value: '75', label: '$75+', checked: false}
    ]
  }
]
const sortOptions = [
  {name: 'Most Popular', href: '#', current: true},
  {name: 'Best Rating', href: '#', current: false},
  {name: 'Newest', href: '#', current: false},
  {name: 'Price: Low to High', href: '#', current: false},
  {name: 'Price: High to Low', href: '#', current: false},
]

const ProductSection = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <>
      {/* Mobile filter dialog */}
      <MobileFilter filters={filters} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen}/>

      <main className="container">
        <ProductsHeaderSection setMobileFiltersOpen={setMobileFiltersOpen} sortOptions={sortOptions} />

        <section aria-labelledby="products-heading" className="pb-24 pt-6">

          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <SidebarFilter filters={filters}/>
            {/* Product grid */}
            <div className="lg:col-span-3">
              <ProductCardSection/>
            </div>
          </div>

        </section>

      </main>

    </>
  );
};

export default ProductSection;