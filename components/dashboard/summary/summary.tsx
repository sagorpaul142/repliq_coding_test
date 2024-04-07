import React from 'react';
import Balance from "@/components/dashboard/summary/balance";
import Sales from "@/components/dashboard/summary/sales";
import Customers from "@/components/dashboard/summary/customers";
import Order from "@/components/dashboard/summary/order";

const Summary = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap -mx-4">
        <Balance/>
        <Sales/>
        <Customers/>
        <Order/>
      </div>
    </div>
  );
};

export default Summary;