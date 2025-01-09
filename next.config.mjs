/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  // Additional valid configuration options go here
};

export default withPWA({
  ...nextConfig,  // Spread the base config here
  dest: 'public',  // Directory for service worker and assets
  disable: process.env.NODE_ENV === 'development',  // Disable PWA in development
});
