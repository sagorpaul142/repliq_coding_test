import CustomerTable from "@/components/customers/customer-table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <CustomerTable/>
    </main>
  );
}