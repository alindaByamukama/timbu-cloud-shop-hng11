import React from "react";
import Image from "next/image";

interface CartItemProps {
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    onRemove: () => void;
    onQuantityChange: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ imageUrl, name, price, quantity, onRemove, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <Image src={imageUrl} alt={name} width={60} height={60} className="rounded-lg" />
        <div className="ml-4">
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-gray-500">₦{price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => onQuantityChange(quantity - 1)} className="px-2">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={() => onQuantityChange(quantity + 1)} className="px-2">+</button>
        <p className="ml-4 font-bold">₦{price * quantity}</p>
        <button onClick={onRemove} className="ml-4 text-red-500">×</button>
      </div>
    </div>
  );
};

export default CartItem;