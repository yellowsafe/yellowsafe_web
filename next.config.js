const path = require('path')
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    redirects: async () => [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'www.yellowsafe.cl' }],
          destination: 'https://yellowsafe.cl/:path*',
          permanent: true
        }],
}
