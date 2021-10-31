const express = require('express');
const { dangkycungcapController } = require('../../controllers');
const { dangkycungcapValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').post(validate(dangkycungcapValidation.createDangkycungcap), dangkycungcapController.createDangkycungcap);

module.exports = router;
