/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig