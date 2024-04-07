import Summary from "@/components/dashboard/summary/summary";
import RevenueChart from "@/components/dashboard/chart/revenue-chart";
import ProductOverview from "@/components/dashboard/chart/product-overview";
import UserList from "@/components/dashboard/table/user-list";
import ProductsList from "@/components/dashboard/table/products-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Summary/>
      <div className="grid grid-cols-1 xl:grid-cols-2 place-content-center gap-4">
        <RevenueChart/>
        <ProductOverview/>
      </div>
      <UserList/>
      <ProductsList/>
    </main>
  );
}