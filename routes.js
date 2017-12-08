const nextRoutes = require('next-routes')
const routes = nextRoutes()

routes.add('index', '/home')
routes.add('register', '/register')
routes.add('login', '/login')
routes.add('channels', '/channels/:channelId')

module.exports = routes
