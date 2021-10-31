const express = require('express');
const { nhacungcapController } = require('../../controllers');
const { nhacungcapValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(nhacungcapValidation.createNhacungcap), nhacungcapController.createNhacungcap);

module.exports = router;
