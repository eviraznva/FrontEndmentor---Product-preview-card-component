/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self' 'unsafe-hashes' 'unsafe-inline';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' vitals.vercel-insights.com cdn.vercel-insights.com;
  connect-src 'self' vitals.vercel-insights.com cdn.vercel-insights.com
`;

const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
