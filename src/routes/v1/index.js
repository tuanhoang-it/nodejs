const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const lopRoute = require('./lop.route');
const professionalRoute = require('./professional.route');
const peopleRoute = require('./people.route');
const sinhvienRoute = require('./sinhvien.route');
const worksforRoute = require('./worksfor.route');
const companiesRoute = require('./companies.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/sinhviens',
    route: sinhvienRoute,
  },
  {
    path: '/peoples',
    route: peopleRoute,
  },
  {
    path: '/professionals',
    route: professionalRoute,
  },
  {
    path: '/worksfors',
    route: worksforRoute,
  },
  {
    path: '/companiess',
    route: companiesRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
