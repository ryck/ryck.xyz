module.exports = {
  poweredByHeader: false,
  experimental: { esmExternals: true },
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com' // Twitter Profile Picture
    ]
  },
  target: 'serverless',
  webpack: (config) => {
    // if (isServer) {
    //   require('./scripts/generate-sitemap.mjs');
    //   require('./scripts/generate-rss');
    // }

    // Replace React with Preact only in client production build
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat'
    //   });
    // }

    return config;
  }
};
