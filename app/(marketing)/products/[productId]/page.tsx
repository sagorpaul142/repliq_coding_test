import SingleProduct from "@/components/marketing/single-product";
import RelatedProductsSlider from "@/components/marketing/slider/related-products-slider";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product detail page",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div className="bg-white container">
      <SingleProduct/>
      <RelatedProductsSlider/>
    </div>
  );
}