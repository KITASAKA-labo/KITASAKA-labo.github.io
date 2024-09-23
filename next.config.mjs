/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
      },
      // Prismaを使用する場合、以下の設定を追加
      experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
      },
};


export default nextConfig;
