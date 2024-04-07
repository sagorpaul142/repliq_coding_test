import SingleProduct from "@/components/marketing/single-product";
import RelatedProductsSlider from "@/components/marketing/slider/related-products-slider";

export default function Home() {
  return (
    <div className="bg-white container">
      <SingleProduct/>
      <RelatedProductsSlider/>
    </div>
  );
}