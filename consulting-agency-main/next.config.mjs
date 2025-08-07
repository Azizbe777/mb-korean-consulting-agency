/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Completely disable all development indicators
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Disable React strict mode to prevent double rendering
  reactStrictMode: false,
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Optimize bundle size
  swcMinify: true,
  // Disable experimental features that might cause issues
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Suppress console errors in production
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Disable webpack dev middleware in production
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.devtool = false;
    }
    return config;
  },
}

export default nextConfig
