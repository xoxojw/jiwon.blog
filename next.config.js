const { withContentlayer } = require("next-contentlayer");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // JavaScript 프로젝트의 컴파일과 번들링 모두에 사용될 수 있는, Rust로 제작된 빌드 툴
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
}

module.exports = withContentlayer(nextConfig);
