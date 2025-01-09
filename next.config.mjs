import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true, // This goes in the main Next.js config, not in the next-pwa config
  pwa: {
    dest: 'public', // Directory where service worker and assets will be placed
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  },
};

export default withPWA(nextConfig);
