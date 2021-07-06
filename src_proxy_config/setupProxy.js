const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', { //meet '/api1' trigger this config
      target: 'http://localhost:5000', // address for request
      changeOrigin: true,  // control the value of host of the request header received by server
      pathRewrite: { '^/api1': '' } // replace substring of path '/api1' to empty ''
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    }),
  )
}