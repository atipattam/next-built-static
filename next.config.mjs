/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
 trailingSlash : true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
}



export default nextConfig;
