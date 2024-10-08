/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    experimental: {
      serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
    },
  };
  
  export default nextConfig;