const nextConfig = {
  reactStrictMode: true,
  basePath: "/nextjs-test",
  assetsPrefix: "/nextjs-test",
  images: {
    loader: "default",
    path: "/",
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = nextConfig
