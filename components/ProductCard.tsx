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

const ProductDescription = styled.p`
    @apply text-gray-500;
`;

