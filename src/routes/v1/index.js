const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const lopRoute = require('./lop.route');
const professionalRoute = require('./professional.route');
const peopleRoute = require('./people.route');
const sinhvienRoute = require('./sinhvien.route');
const worksforRoute = require('./worksfor.route');
const nhacungcapRoute = require('./nhacungcap.route');
const companiesRoute = require('./companies.route');
const loaidichvuRoute = require('./loaidichvu.route');
const mucphiRoute = require('./mucphi.route');
const dongxeRoute = require('./dongxe.route');
const dangkycungcapRoute = require('./dangkycungcap.route');
const sinhvien1Route = require('./sinhvien1.route');
const lop1Route = require('./lop1.route');
const khoaRoute = require('./khoa.route');
const monHocRoute = require('./monhoc.route');
const ketQuaRoute = require('./ketqua.route');
const BT1quanlydiemRoute = require('./BT1quanlydiem.route');
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
  {
    path: '/nhacungcaps',
    route: nhacungcapRoute,
  },
  {
    path: '/loaidichvus',
    route: loaidichvuRoute,
  },
  {
    path: '/mucphis',
    route: mucphiRoute,
  },
  {
    path: '/dongxes',
    route: dongxeRoute,
  },
  {
    path: '/dangkycungcaps',
    route: dangkycungcapRoute,
  },
  {
    path: '/sinhvien1s',
    route: sinhvien1Route,
  },
  {
    path: '/lop1s',
    route: lop1Route,
  },
  {
    path: '/khoas',
    route: khoaRoute,
  },
  {
    path: '/monHocs',
    route: monHocRoute,
  },
  {
    path: '/ketQuas',
    route: ketQuaRoute,
  },
  {
    path: '/baitap',
    route: BT1quanlydiemRoute,
  }
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
