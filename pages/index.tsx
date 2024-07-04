import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Home: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/products');
    }, [router]);

    return null;
};

export default Home;