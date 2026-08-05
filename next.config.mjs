/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://apps.apple.com/us/app/offline/id6753837153',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
