const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // JavaScript 프로젝트의 컴파일과 번들링 모두에 사용될 수 있는, Rust로 제작된 빌드 툴
}

module.exports = withContentlayer(nextConfig);
