import BestSeller from "@/components/marketing/best-seller";
import BestSellingCollection from "@/components/marketing/best-selling-collection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <BestSellingCollection/>
      <BestSeller/>
    </main>
  );
}
