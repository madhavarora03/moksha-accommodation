// import './config/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
  },
};

export default nextConfig;
