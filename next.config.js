const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com'],
    disableStaticImages: true,
  },
};
module.exports = withPlugins([optimizedImages, nextConfiguration]);