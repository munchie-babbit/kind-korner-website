/** @type {import('next').NextConfig} */
// Remove output: "export" from {} to run locally
const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
  output: "export",
};

module.exports = nextConfig;
