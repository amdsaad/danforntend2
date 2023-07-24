/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dan.webse.io',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },

}

module.exports = nextConfig
