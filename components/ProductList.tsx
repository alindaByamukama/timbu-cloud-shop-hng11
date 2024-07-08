import React from 'react';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150'},
        { id: 2, name: 'Product 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150'},
        { id: 3, name: 'Product 3', description: 'Description 3', imageUrl: 'https://via.placeholder.com/150'},
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((product) => (
                <ProductCard key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl} price={''} />
            ))}
        </div>
    );
};

export default ProductList;