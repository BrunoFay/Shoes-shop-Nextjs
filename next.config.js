/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['maze.cdn.plataformaneo.com.br'],
  },
}

module.exports = nextConfig
