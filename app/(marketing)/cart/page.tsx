import OrderSummary from "@/components/marketing/cart/order-summary";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cart page",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <OrderSummary/>
    </main>
  );
}