// next.config.js
module.exports = {
  productionBrowserSourceMaps: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "popseekltest.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
