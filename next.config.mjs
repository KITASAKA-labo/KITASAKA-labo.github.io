/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
      domains: ['github.com'],
      remotePatterns: [
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