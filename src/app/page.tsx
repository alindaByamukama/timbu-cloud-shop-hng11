import React from "react";
import Link from 'next/link';
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import { products } from "@/data/products";

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Discover Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={`/product/${product.name}`} passHref legacyBehavior>
                <a>
                  <ProductCard
                    key={index}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                  />
                </a>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;