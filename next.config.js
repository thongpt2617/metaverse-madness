/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
