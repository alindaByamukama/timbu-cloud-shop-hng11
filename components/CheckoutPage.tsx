import React from "react";
import styled from "styled-components";

const Container = styled.div`
    @apply container mx-auto px-4;
`;

const Title = styled.div`
    @apply text-3xl font-bold my-4;
`;

const CheckoutForm = styled.form`
    @apply bg-white shadow-md rounded-lg p-8;
`;

const FormField = styled.div`
    @apply mb-4;
`;

const Label = styled.label`
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline;
`;

const Input = styled.input`
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading:tight focus:outline-none focus:shadow-outline;
`;

const Button = styled.button`
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline;
`;

const CheckoutPage: React.FC = () => {
    return (
        <Container>
            <Title>Checkout</Title>
            <CheckoutForm>
                <FormField>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" placeholder="Your Name" />
                </FormField>
                <FormField>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Your Email" />
                </FormField>
                <FormField>
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" id="address" placeholder="Your Address" />
                </FormField>
                <Button type="submit">Place Order</Button>
            </CheckoutForm>
        </Container>
    );
};

export default CheckoutPage;