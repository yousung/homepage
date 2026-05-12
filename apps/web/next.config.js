const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || '';

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  transpilePackages: ['@homepage/shared'],
};
