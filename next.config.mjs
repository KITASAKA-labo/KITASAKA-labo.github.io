/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    experimental: {
      serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
    },
    
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
  };
  
  export default nextConfig;