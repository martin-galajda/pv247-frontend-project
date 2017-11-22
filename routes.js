const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes.add('home', '/home')
routes.add('register', '/register')
routes.add('index', '/login')
routes.add('channels', '/channels/:channelId')

module.exports = routes
