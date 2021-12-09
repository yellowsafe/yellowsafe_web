const path = require('path')
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    assetPrefix: "/yellowsafe_web/" ,

}
