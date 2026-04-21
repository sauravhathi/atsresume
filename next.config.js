const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

module.exports = withNextIntl(nextConfig);
