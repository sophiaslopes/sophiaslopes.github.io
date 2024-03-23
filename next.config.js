module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}