import BestSeller from "@/components/marketing/best-seller";
import BestSellingCollection from "@/components/marketing/best-selling-collection";
import BestServices from "@/components/marketing/best-services";
import CategorySlider from "@/components/marketing/slider/category-slider";
import NewArrivalsSlider from "@/components/marketing/slider/new-arrivals-slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <CategorySlider/>
      <BestSellingCollection/>
      <BestServices/>
      <NewArrivalsSlider/>
      <BestSeller/>
    </main>
  );
}
