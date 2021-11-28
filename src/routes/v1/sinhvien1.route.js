const express = require('express');
const sinhvien1Controller = require('../../controllers/sinhvien1.controller');

const router = express.Router();

router.route('/').post(sinhvien1Controller.createSinhvien1).get(sinhvien1Controller.getSinhvien1s);

router
  .route('/:sinhvien1Id')
  .get(sinhvien1Controller.getSinhvien1)
  .patch(sinhvien1Controller.updateSinhvien1)
  .delete(sinhvien1Controller.deleteSinhvien1);

module.exports = router;
