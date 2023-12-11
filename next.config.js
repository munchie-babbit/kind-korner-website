/** @type {import('next').NextConfig} */
// Remove output: "export" from {} to run locally
const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
};

if (process.env.NODE_ENV === "production") {
  // Add properties for production environment
  nextConfig.output = "export";
}

module.exports = nextConfig;
