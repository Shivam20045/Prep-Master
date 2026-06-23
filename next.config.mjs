/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
