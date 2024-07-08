import React from 'react';
import Image from 'next/image';
import DescriptionLink from './DescriptionLink';

interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, imageUrl }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center">
            <Image src={imageUrl} alt={name}  width={200} height={200} className="w-full h-auto object-cover mx-auto" />
            <div className="mt-4">
                <DescriptionLink label={name} href="#" />
                <p className="text-gray-500">{description}</p>
                <p className="text-primary font-bold">{price}</p>
                <button className="bg-pink-500 text-white rounded-full px-4 py-2 mt-4">Add to Cart</button>
            </div>
        </div >
    );
};

export default ProductCard;