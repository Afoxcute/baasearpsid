/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_OKTO_CLIENT_ID: process.env.NEXT_PUBLIC_OKTO_CLIENT_ID,
    NEXT_PUBLIC_OKTO_API_KEY: process.env.NEXT_PUBLIC_OKTO_API_KEY,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
};

export default nextConfig;