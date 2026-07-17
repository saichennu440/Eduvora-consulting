/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- This activates the static export
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
