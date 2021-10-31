const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { huongdanService } = require('../services');

const createHuongdan = catchAsync(async (req, res) => {
  const huongdan = await huongdanService.createHuongdan(req.body);
  res.status(httpStatus.CREATED).send(huongdan);
});



module.exports = {
  createHuongdan,
};
