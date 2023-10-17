/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.stickpng.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
