const express = require('express');
const { huongdanController } = require('../../controllers');
const { huongdanValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(huongdanValidation.createHuongdan), huongdanController.createHuongdan);

module.exports = router;
