import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <section className="bg-lightBlue flex flex-col md:flex-row items-center justify-between p-10">
      <div className="max-w-md mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Every Sip is a Step Towards Sustainability</h1>
        <p className="text-lg mb-4">
          Our eco-friendly water bottles offer sustainable hydration solutions. Enjoy pure refreshment while reducing environmental impact.
        </p>
        <Link href="/shop">
          
            Shop Now
          
        </Link>
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/images/banner-image.png"
          alt="Person drinking water"
          width={600}
          height={400}
          className="rounded"
        />
      </div>
    </section>
  );
};

export default Banner;
