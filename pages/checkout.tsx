import React from 'react';
import Link from 'next/link';
import PaymentMethodForm from '../components/PaymentMethodForm';
import OrderSummary from '../components/OrderSummary';
import BackLink from '../components/BackLink';

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Check Out</h1>
        <BackLink href="/cart" />
      </header>
      <main className="container mx-auto mt-10 flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-2/3 bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
          <PaymentMethodForm />
        </div>
        <div className="w-full lg:w-1/3 bg-white p-6 shadow rounded-lg">
          <OrderSummary />
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;
