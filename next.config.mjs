/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
      domains: ['raw.githubusercontent.com', 'github.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'github.com',
        }
      ],
    },
    experimental: {
      serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
    },
  };
  
  export default nextConfig;