import OrderSummary from "@/components/marketing/cart/order-summary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <OrderSummary/>
    </main>
  );
}