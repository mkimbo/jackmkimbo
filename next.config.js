/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.ts",
  },
};

module.exports = nextConfig;
