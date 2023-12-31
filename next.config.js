/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {

  reactStrictMode: false,
  swcMinify: true,
  i18n,
  images: {
    domains: ['webadmin.dancompany.sa', 'dancompany.sa','dan.webse.io'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'webadmin.dancompany.sa',
    //     port: '',
    //     pathname: '/storage/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'webadmin.dancompany.sa',
    //     port: '',
    //     pathname: '/_next/image/**',
    //   },
    // ],
  },

}

module.exports = nextConfig
