import React from "react";
import ProductList from '../components/ProductList'

const ProductPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">Products</h1>
            <ProductList />
        </div>
    );
};

export default ProductPage;