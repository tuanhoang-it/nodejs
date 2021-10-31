const express = require('express');
const { dongxeController } = require('../../controllers');
const { dongxeValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(dongxeValidation.createDongxe), dongxeController.createDongxe);

module.exports = router;
