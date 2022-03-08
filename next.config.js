/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nextjs-test",
  assetsPrefix: "/nextjs-test",
  images: {
    loader: "imgix",
    path: "/",
  },
}

module.exports = nextConfig
