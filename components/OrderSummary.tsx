import React from 'react';

const OrderSummary: React.FC = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                    <span>Bamboo Lid</span>
                    <span>₦20,000</span>
                </li>
                <li className="flex justify-between">
                    <span>Sport</span>
                    <span>₦15,000</span>
                </li>
            </ul>
            <div className="space-y-2 mb-8">
                <div className="flex justify-between">
                    <span>Total Products</span>
                    <span>₦35,000</span>
                </div>
                <div className="flex justify-between">
                    <span>Shopping Cost</span>
                    <span>Fee</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₦1,000</span>
                </div>
            </div>
            <div className="flex justify-between font-bold">
                <span>Total Cost</span>
                <span>₦36,000</span>
            </div>
        </div>
    );
};

export default OrderSummary;
