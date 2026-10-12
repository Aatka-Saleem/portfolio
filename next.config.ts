// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 1. Next.js ko allow karta hai modern light-weight formats serve karne ke liye
    formats: ["image/avif", "image/webp"],

    // 2. Agar certificate images local /public folder ke bahar kisi external link par hain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Sabhi external secure domains ko allow karega
      },
    ],

    // 3. Image quality aur memory footprint optimize karta hai
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;