import React from 'react';

interface CartSummaryProps {
  totalProducts: number;
  totalPrice: number;
  shippingCost: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ totalProducts, totalPrice, shippingCost, onCheckout }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Summary</h2>
      <p className="flex justify-between"><span>Total Products</span><span>₦{totalProducts}</span></p>
      <p className="flex justify-between"><span>Shipping Cost</span><span>₦{shippingCost}</span></p>
      <p className="flex justify-between font-bold mt-4"><span>Total Cost</span><span>₦{totalPrice}</span></p>
      <button onClick={onCheckout} className="bg-pink-500 text-white rounded-full w-full py-2 mt-4">Check Out</button>
    </div>
  );
};

export default CartSummary;
