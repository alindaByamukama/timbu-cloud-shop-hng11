import React, {useState} from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { useRouter } from 'next/router';

const CartPage: React.FC = () => {
    const router = useRouter();
    const [cartItems, setCartItems] = useState([
        {id: 'bamboo-lid', imageUrl: '/images/products/bamboo-lid.png', name: 'Bamboo Lid', price: 20000, quantity: 1  },
        {id: 'sport', imageUrl: '/images/products/sport.png', name: 'Sport', price: 15000, quantity: 1  },
    ]);

    const handleRemove = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity} : item));
    };

    const totalProducts = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCost = 5000;

    const handleCheckout = () => {
        // checkout logic to be implemented here -> route to checkout page for example
        alert('Proceeding to checkout');
    };

    return (
    <div className="container mx-auto py-10">
      <button onClick={() => router.back()} className="text-blue-500 mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => handleRemove(item.id)}
              onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
            />
          ))}
        </div>
        <CartSummary
          totalProducts={totalProducts}
          totalPrice={totalPrice}
          shippingCost={shippingCost}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default CartPage;