const express = require('express');
const { loaidichvuController } = require('../../controllers');
const { loaidichvuValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(loaidichvuValidation.createLoaidichvu), loaidichvuController.createLoaidichvu);

module.exports = router;
