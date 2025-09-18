import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack(config) {
    // Turn off the default svg loader
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test?.test?.('.svg')) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    // SVGR settings
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: true,
            titleProp: true,
            ref: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
