// next.config.js
module.exports = {
    async redirects() {
      return [
        { source: '/app/:path*', destination: 'https://ipinfo.io/:path*' }
      ];
    }
  };