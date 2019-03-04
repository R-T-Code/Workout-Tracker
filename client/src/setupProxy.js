const proxy = require('http-proxy-middleware')
 
// Redirect all routes starting with /api to port 9000
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:9000/' }));
}