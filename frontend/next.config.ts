/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // Specify the backend port
        pathname: '/**', // Allow all paths under localhost:8000
      },
    ],
  },
};

module.exports = nextConfig;