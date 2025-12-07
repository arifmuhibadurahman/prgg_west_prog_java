/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // supaya ESLint error tidak menghentikan deploy
  },
};

export default nextConfig;
