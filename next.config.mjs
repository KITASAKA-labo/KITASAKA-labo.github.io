/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    experimental: {
      serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
    },
    module:exports={
      images: {
        domains: ['github.com'],
      },
    }
  };
  
  export default nextConfig;