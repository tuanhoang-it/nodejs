const express = require('express');
const { mucphiController } = require('../../controllers');
const { mucphiValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(mucphiValidation.createMucphi), mucphiController.createMucphi);

module.exports = router;
