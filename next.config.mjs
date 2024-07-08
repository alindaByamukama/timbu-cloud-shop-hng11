/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourdomain.com'], // Add your domain here for Image optimization
  },
  // Other custom configurations can go here
};

module.exports = nextConfig;
