/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
};

module.exports = withNextVideo(nextConfig);

