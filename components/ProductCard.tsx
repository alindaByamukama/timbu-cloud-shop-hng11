import styled from 'styled-components';
import React from 'react';

const Card = styled.div`
    @apply bg-white shadow-md rounded-lg overflow-hidden p-4;
`;

const ProductImage = styled.img`
    @apply w-full h-48 object-cover;
`;

const ProductInfo = styled.div`
    @apply mt-4;
`;

const ProductName = styled.h2`
    @apply text-lg font-bold;
`;

const ProductDescription = styled.p`
    @apply text-gray-500;
`;

const ProductCard: React.FC<{ name: String; description: String; imageUrl: string }> = ({ name, description, imageUrl }) => {
    return (
        <Card>
            <ProductImage src={imageUrl} alt={name} />
            <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductDescription>{description}</ProductDescription>
            </ProductInfo>
        </Card>
    );
};

export default ProductCard;