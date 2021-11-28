const express = require('express');
const lop1Controller = require('../../controllers/lop1.controller');

const router = express.Router();

router.route('/').post(lop1Controller.createLop1).get(lop1Controller.getLop1s);

router
  .route('/:lop1Id')
  .get(lop1Controller.getLop1)
  .patch(lop1Controller.updateLop1)
  .delete(lop1Controller.deleteLop1);

module.exports = router;
