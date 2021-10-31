const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { dongxeService } = require('../services');

const createDongxe = catchAsync(async (req, res) => {
  const dongxe = await dongxeService.createDongxe(req.body);
  res.status(httpStatus.CREATED).send(dongxe);
});



module.exports = {
  createDongxe,
};
