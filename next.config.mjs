/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deployed to https://<username>.github.io/<repo-name>, basePath can be set via env var
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
