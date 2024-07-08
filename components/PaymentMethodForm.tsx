import React from 'react';

const PaymentMethodForm: React.FC = () => {
    return (
        <form className="space-y-6">
            <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full mt-1 border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
                <label className="block text-gray-700">Phone</label>
                <div className="flex">
                    <select className="border-gray-300 rounded-l-md shadow-sm">
                        <option value="+234">+234</option>
                        {/* Add other country codes as needed */}
                    </select>
                    <input type="tel" className="flex-grow mt-1 border-gray-300 rounded-r-md shadow-sm" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-gray-700">Card Number</label>
                    <input type="text" className="w-full mt-1 border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                    <label className="block text-gray-700">MM/YY</label>
                    <input type="text" className="w-full mt-1 border-gray-300 rounded-md shadow-sm" />
                </div>
                <div>
                    <label className="block text-gray-700">CVC</label>
                    <input type="text" className="w-full mt-1 border-gray-300 rounded-md shadow-sm" />
                </div>
            </div>
            <div>
                <label className="block text-gray-700">Card Holder Name</label>
                <input type="text" className="w-full mt-1 border-gray-300 rounded-md shadow-sm" />
            </div>
            <button type="submit" className="w-full py-2 bg-coral-500 text-white rounded-md shadow-sm">
                Pay Now
            </button>
        </form>
    );
};

export default PaymentMethodForm;
