/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH || '',
  images: { unoptimized: true },
};
