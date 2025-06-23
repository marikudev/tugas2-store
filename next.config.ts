import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // opsional: jika repo-mu bukan di root
  basePath: '/tugas2-store',
  assetPrefix: '/tugas2-store',
};

module.exports = {
  images: {
    domains: ['fakestoreapi.com', 'images.unsplash.com', 'cdn.example.com'],
  },
};


export default nextConfig;
